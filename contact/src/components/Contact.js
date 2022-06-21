import React from "react";
import ContactDetail from "./ContactDetail";
import ContactInfo from "./ContactInfo";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      selectedIndex: -1,
      data: [
        { name: "KIM", phone: "010-0000-0001" },
        { name: "LEE", phone: "010-0000-0002" },
        { name: "CHOI", phone: "010-0000-0003" },
        { name: "PARK", phone: "010-0000-0004" },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickDetail = this.handleClickDetail.bind(this);
  }

  handleChange(e) {
    this.setState({ keyword: e.target.value });
  }

  handleClickDetail(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    const mapToComponent = (data) => {
      data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      return data
        .filter((it) => it.name.toLowerCase().includes(this.state.keyword.toLocaleLowerCase()))
        .map((it, idx) => (
          <ContactInfo
            name={it.name}
            phone={it.phone}
            key={idx}
            onClick={this.handleClickDetail.bind(this, idx)}
          />
        ));
    };

    return (
      <div>
        <h1>Contact</h1>
        <input onChange={this.handleChange} placeholder="Search"></input>
        <div>{mapToComponent(this.state.data)}</div>
        <ContactDetail
          info={this.state.selectedIndex === -1 ? null : this.state.data[this.state.selectedIndex]}
        />
      </div>
    );
  }
}
