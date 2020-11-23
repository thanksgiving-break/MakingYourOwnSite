import React, { useState } from "react";
import "./css/index.css";
// import Form from "./Form";
import Header from "./Header";
// import Body from "./Body";
// import Footer from "./Footer";

const dummyData = {
  headerStyle: null,
  titleInput: "",
  linksInput: "",
  links: [],
  sectionstyle: null,
  photos: [],
  sections: [],
  footerStyle: null,
  contactAndTitle: "",
  address: "",
  email: "",
  phone: "",
  icons: [{ iconImage: "", iconName: "" }],
  copyRights: "" /*function that gets the date of that year */,
};

function App() {
  const [data, setData] = useState(dummyData);

  function addingLinks(e) {
    // e.preventDefault();
    if (data.linksInput.length <= 2) return;
    const newArr = data.links.concat({ link: data.linksInput });
    setData({ ...data, linksInput: "", links: newArr });
  }

  console.log(data);
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="title here..."
          value={data.titleInput}
          onChange={(e) => setData({ ...data, titleInput: e.target.value })}
        />

        <input
          placeholder="Add Link here..."
          value={data.linksInput}
          onChange={(e) => setData({ ...data, linksInput: e.target.value })}
        />

        <button onClick={addingLinks}>Add Link</button>
      </form>
      {/* <Form /> */}

      <Header data={data} />

      {/* <Body photos={dummyData.photos} sections={dummyData.sections} /> */}

      {/* <Footer links={dummyData.links} /> */}
    </div>
  );
}

export default App;
