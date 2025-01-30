import React, { useEffect, useState } from 'react';
import { postData, updateData } from '../api/PostApi';

const Form = ({ data, setData, updateApi, setUpdateApi }) => {
  const [addData, setAddData] = useState({
    title: '',
    body: '',
  });

  const isempty = Object.keys(updateApi).length === 0;

  useEffect(() => {
    setAddData({
      title: updateApi.title || "",
      body: updateApi.body || "",
    });
  }, [updateApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePostData = async () => {
    try {
      const res = await postData(addData); // Use postData for new posts
      if (res.status === 201) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleEditData = async () => {
    try {
      const res = await updateData(updateApi.id, addData); // Use putData for updates
      if (res.status === 200) {
        setData((prev) =>
          prev.map((curElem) =>
            curElem.id === updateApi.id ? res.data : curElem
          )
        );
        setAddData({ title: "", body: "" }); // Reset form
        setUpdateApi({}); // Clear updateApi
      }
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      handlePostData();
    } else if (action === "Edit") {
      handleEditData();
    }
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center gap-3 mb-4"
      onSubmit={handleForm}
    >
      <div>
        <label htmlFor="title">
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            value={addData.title}
            onChange={handleInputChange}
            placeholder="Add Title"
            className="form-control"
          />
        </label>
      </div>

      <div>
        <label htmlFor="body">
          <input
            type="text"
            autoComplete="off"
            id="body"
            name="body"
            value={addData.body}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Add Body"
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-success"
        value={isempty ? "Add" : "Edit"}
      >
        {isempty ? "Add" : "Edit"}
      </button>
    </form>
  );
};

export default Form;
