import { useState, useEffect } from "react";
import ContactCreate from "./ContactCreate";
import ContactDetail from "./ContactDetail";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  const [keyword, setKeyword] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.data);
    if (localData.length) {
      setData(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.data = JSON.stringify(data);
  }, [data]);

  const handleClickDetail = (index) => setSelectedIndex(index);
  const handleCreate = (newOne) => setData((prev) => [...prev, newOne]);
  const handleRemove = () => {
    setData((prev) => {
      prev.splice(selectedIndex, 1);
      return prev;
    });
    setSelectedIndex(-1);
  };
  const handleSaveEdit = (newOne) => {
    setData((prev) => {
      prev.splice(selectedIndex, 1);
      const data = [...prev, newOne];
      data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      return data;
    });
    setSelectedIndex(data.indexOf(newOne));
  };

  const mapToComponent = (data) => {
    data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return data
      .filter((it) => it.name.toLowerCase().includes(keyword.toLocaleLowerCase()))
      .map((it, idx) => (
        <ContactInfo
          name={it.name}
          phone={it.phone}
          key={idx}
          onClick={() => handleClickDetail(idx)}
        />
      ));
  };

  return (
    <div>
      <h1>Contact</h1>
      <input onChange={(e) => setKeyword(e.target.value)} placeholder="Search"></input>
      <div>{mapToComponent(data)}</div>
      <ContactDetail
        key={selectedIndex}
        name={selectedIndex === -1 ? null : data[selectedIndex].name}
        phone={selectedIndex === -1 ? null : data[selectedIndex].phone}
        onRemove={handleRemove}
        onSave={(newOne) => handleSaveEdit(newOne)}
      />
      <ContactCreate onCreate={(newOne) => handleCreate(newOne)} />
    </div>
  );
}
