import React from "react";
import ContactCreate from "./ContactCreate";
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
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ keyword: e.target.value });
  }

  handleClickDetail(index) {
    this.setState({ selectedIndex: index });
  }

  handleCreate(newOne) {
    this.setState((prevState) => ({ data: [...prevState.data, newOne] }));
  }

  handleRemove() {
    this.setState((prevState) => {
      prevState.data.splice(prevState.selectedIndex, 1);
      return { data: [...prevState.data], selectedIndex: -1 };
    });
  }

  handleSaveEdit(newOne) {
    this.setState((prevState) => {
      prevState.data.splice(prevState.selectedIndex, 1);
      const data = [...prevState.data, newOne];
      data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      const selectedIndex = data.indexOf(newOne);
      return { data, selectedIndex };
    });
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
          key={this.state.selectedIndex}
          name={
            this.state.selectedIndex === -1 ? null : this.state.data[this.state.selectedIndex].name
          }
          phone={
            this.state.selectedIndex === -1 ? null : this.state.data[this.state.selectedIndex].phone
          }
          onRemove={this.handleRemove}
          onSave={(newOne) => this.handleSaveEdit(newOne)}
        />
        <ContactCreate onCreate={(newOne) => this.handleCreate(newOne)} />
      </div>
    );
  }
}
