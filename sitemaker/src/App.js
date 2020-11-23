import React, { useState } from "react";
import "./css/index.css";
// import Form from "./Form";
import Header from "./Header";
// import Body from "./Body";
// import Footer from "./Footer";

const dummyData = {
  headerStyle: null,
  titleInput: "",
  title: [],
  linksInput: "",
  links: [],
  sectionstyle: null,
  photos: [],
  // photos: [{ photo: "" }, { photo: "" }, { photo: "" }, { photo: "" }],
  // sections: [
  //   { section: "" },
  //   { section: "" },
  //   { section: "" },
  //   { section: "" },
  // ],
  sections: [],
  footerStyle: null,
  contactAndTitle: "",
  address: "",
  email: "",
  phone: "",
  icons: [{ iconImage: "", iconName: "" }],
  copyRights: "" /*function that gets the date of that year */,
};
// concat

function App() {
  const [data, setData] = useState(dummyData);

  function addingLinks(e) {
    if (data.linksInput.length <= 2) return;
    const newArr = data.links.concat({ link: data.linksInput });
    setData({ linksInput: "", links: newArr });
  }

  console.log(data);
  return (
    <div className="App">
      <input
        placeholder="title here..."
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <input
        placeholder="Add Link here..."
        value={data.linksInput}
        onChange={(e) => setData({ ...data, linksInput: e.target.value })}
      />
      <button onClick={addingLinks}>Add Link</button>
      {/* <Form /> */}

      <Header title={data.title} links={data.links} />

      {/* <Body photos={dummyData.photos} sections={dummyData.sections} /> */}

      {/* <Footer links={dummyData.links} /> */}
    </div>
  );
}

export default App;
