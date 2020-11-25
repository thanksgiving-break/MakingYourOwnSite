import React, { useState } from "react";
import "./css/index.css";
// import Form from "./Form";
import Draggable from "react-draggable";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const dummyData = {
  headerStyle: null,
  titleInput: "",
  title: [],
  linksInput: "",
  links: [],
  sectionstyle: null,
  photos: [],
  sectionsInput: "",
  sections: [],
  footerStyle: null,
  contactAndTitle: "",
  addressInput: "",
  address: [],
  emailInput: "",
  email: [],
  phoneInput: "",
  phone: [],
  icons: [{ iconImage: "", iconName: "" }],
  copyRights: "" /*function that gets the date of that year */,
};

function App() {
  const [data, setData] = useState(dummyData);
  console.log(data);

  function addTitle(e) {
    if (data.title.length >= 1) return;
    const newTitle = data.title.concat(data.titleInput);
    setData({ ...data, titleInput: "", title: newTitle });
  }

  function addingLinks(e) {
    if (data.linksInput.length <= 2) return;
    const newArr = data.links.concat({ link: data.linksInput });
    setData({ ...data, linksInput: "", links: newArr });
  }

  function addSection(e) {
    if (data.sectionsInput.length < 2) return;
    const newSection = data.sections.concat({ sections: data.sectionsInput });
    setData({ ...data, sectionsInput: "", sections: newSection });
  }

  function addAddress(e) {
    if (data.addressInput.length < 1) return;
    const newAddress = data.address.concat(data.addressInput);
    setData({ ...data, addressInput: "", address: newAddress });
  }

  function addEmail(e) {
    if (data.emailInput.length < 7) return;
    const newEmail = data.email.concat(data.emailInput);
    setData({ ...data, emailInput: "", email: newEmail });
  }

  function addPhone(e) {
    if (data.phoneInput.length < 7) return;
    const newPhone = data.phone.concat(data.phoneInput);
    setData({ ...data, phoneInput: "", phone: newPhone });
  }

  console.log(data);
  return (
    <div className="App">
      <Header title={data.title} links={data.links} />

      <Body photos={data.photos} sections={data.sections} />

      <Footer
        links={data.links}
        address={data.address}
        email={data.email}
        phone={data.phone}
        icons={data.icons}
      />
      <Draggable>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="info">
            <input
              placeholder="Add Title here..."
              value={data.titleInput}
              onChange={(e) => setData({ ...data, titleInput: e.target.value })}
            />
          </div>

          <button onClick={addTitle}>Add Title</button>
          <div className="info">
            <input
              placeholder="Add Link here..."
              value={data.linksInput}
              onChange={(e) => setData({ ...data, linksInput: e.target.value })}
            />
          </div>
          <button onClick={addingLinks}>Add Link</button>
          <div className="info">
            <input
              placeholder="Add Address here..."
              value={data.addressInput}
              onChange={(e) =>
                setData({ ...data, addressInput: e.target.value })
              }
            />
          </div>
          <button onClick={addAddress}>Add Address</button>
          <div className="info">
            <input
              placeholder="Add Sections here..."
              value={data.sectionsInput}
              onChange={(e) =>
                setData({ ...data, sectionsInput: e.target.value })
              }
            />
          </div>
          <button onClick={addSection}>Add Sections</button>
          <div className="info">
            <input
              placeholder="Add Email here..."
              value={data.emailInput}
              onChange={(e) => setData({ ...data, emailInput: e.target.value })}
            />
          </div>
          <button onClick={addEmail}>Add Email</button>
          <div className="info">
            <input
              placeholder="Add Phone Number here..."
              value={data.phoneInput}
              onChange={(e) => setData({ ...data, phoneInput: e.target.value })}
            />
          </div>
          <button onClick={addPhone}>Add Phone Number</button>
        </form>
      </Draggable>
    </div>
  );
}

export default App;
