import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file)
  }
`;

function App() {
  const [file, setFile] = useState(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const { data } = await uploadFile({ variables: { file } });
      console.log("File uploaded successfully:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
