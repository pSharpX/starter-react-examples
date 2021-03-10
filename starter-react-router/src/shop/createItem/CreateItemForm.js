import React, { Component } from "react";
// import API from "../core/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectBox from "../../shared/controls/SelectBox";
// import swal from "sweetalert";

export default class CreateItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      categories: [],
      item: {
        name: "",
        description: "",
        price: 0,
        category: {
          Id: 0,
        },
        image: null,
      },
    };
    this.fileInput = React.createRef();
    this.imageSrc = {};
  }
  resetItemState = () => {
    this.setState({
      item: {
        name: "",
        description: "",
        price: 0,
        category: {
          Id: 0,
        },
        image: {},
      },
    });
  };
  saveItemState = () => {
    // const { item } = this.state;
    // let data = new FormData();
    // data.append("name", item.name);
    // data.append("description", item.description);
    // data.append("price", item.price);
    // data.append("categoryId", item.category);
    // data.append("image", item.image);
    // return API.post("/item", data, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
  };
  componentDidMount = () => {
    // this.setState({
    //   loading: true,
    // });
    // API.get("/category")
    //   .then((res) => {
    //     const categories = res.data;
    //     this.setState({
    //       loading: true,
    //       categories,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       loading: true,
    //     });
    //   });
  };
  handleFileInputChange = (event) => {
    // event.target.value: take the file's name
    const value = event.target.files[0];
    const name = event.target.name;
    this.imageSrc = URL.createObjectURL(value);
    this.setState({
      item: {
        ...this.state.item,
        [name]: value,
      },
    });
  };
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      item: {
        ...this.state.item,
        [name]: value,
      },
    });
  };
  handleCancelButtonClick = (event) => {
    // swal({
    //   title: "Are you sure?",
    //   text: "Once canceled, you will not be able to recover this item info!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     this.resetItemState();
    //   }
    // });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // swal({
    //   title: "Are you sure?",
    //   text: "Once confirmed, you will not be able to change or undo this item!",
    //   icon: "warning",
    //   buttons: true,
    // })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       return this.saveItemState();
    //     }
    //     throw null;
    //   })
    //   .then((res) => {
    //     const data = res.data;
    //     swal({
    //       title: "Result:",
    //       text: JSON.stringify(data),
    //       icon: "success",
    //     });
    //   })
    //   .catch((error) => {
    //     if (error) {
    //       swal("Oh noes!", "The AJAX request failed!", "error");
    //     } else {
    //       swal.stopLoading();
    //       swal.close();
    //     }
    //   });
  };
  render() {
    const { categories, item, loading } = this.state;
    const options = categories.map((item) => ({
      value: item.Id,
      text: item.name,
    }));
    return (
      <div className="p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">
          <FontAwesomeIcon
            icon="plus-square"
            className="mr-2"
          ></FontAwesomeIcon>
          <span>Producto</span>
        </h6>
        <div className="pt-3">
          <form
            id="form"
            name="form"
            onSubmit={this.handleSubmit}
            className="needs-validation"
            noValidate={true}
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              {/*#{productoBean.nombreInputValid ? 'is-valid': 'is-invalid'}*/}
              <input
                id="name"
                name="name"
                className="form-control"
                required={true}
                placeholder="Name"
                aria-describedby="nameHelp"
                value={item.name}
                onChange={this.handleChange}
              />
              <small id="nameHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <span className="d-block invalid-feedback" htmlFor="name"></span>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              {/*#{productoBean.descripcionInputValid ? 'is-valid': 'is-invalid'}*/}
              <input
                id="description"
                name="description"
                className="form-control"
                required={true}
                placeholder="Description"
                aria-describedby="descriptionHelp"
                value={item.description}
                onChange={this.handleChange}
              />
              <small id="descriptionHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <span
                className="d-block invalid-feedback"
                htmlFor="description"
              ></span>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <SelectBox
                id="category"
                name="category"
                value={this.category && this.category.Id}
                options={options}
                onChange={this.handleChange}
              >
                <option value="0">---- Default -----</option>
              </SelectBox>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              {/*#{productoBean.precioInputValid ? 'is-valid': 'is-invalid'}*/}
              <input
                id="price"
                name="price"
                className="form-control"
                type="number"
                min="0"
                placeholder="Precio"
                value={item.price}
                onChange={this.handleChange}
              />
              <span
                className="d-block invalid-feedback"
                htmlFor="precio"
              ></span>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <div className="input-group">
                <input
                  id="image"
                  name="image"
                  className="d-none"
                  type="file"
                  ref={this.fileInput}
                  onChange={this.handleFileInputChange}
                />
                <input
                  id="filename"
                  name="filename"
                  type="text"
                  readOnly={true}
                  className="form-control"
                  value={item.image && item.image.name ? item.image.name : ""}
                  placeholder="File's name"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(event) =>
                      this.setState({
                        item: {
                          ...this.state.item,
                          image: {},
                        },
                      })
                    }
                  >
                    <FontAwesomeIcon icon="undo" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(event) => this.fileInput.current.click()}
                  >
                    <FontAwesomeIcon icon="folder-open" />
                  </button>
                </div>
              </div>
              <div
                style={{ borderStyle: "dashed" }}
                className="container mt-3 p-2 border border-1 border-info"
              >
                {item.image && item.image.name ? (
                  <img
                    src={this.imageSrc}
                    alt={item.image && item.image.name}
                  />
                ) : (
                  <div>
                    <FontAwesomeIcon
                      icon="file-upload"
                      size="2x"
                      className="mr-2"
                    />
                    Choose an image
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-outline-danger mr-2"
                onClick={this.handleCancelButtonClick}
              >
                Cancel
                <FontAwesomeIcon icon="redo" className="ml-2"></FontAwesomeIcon>
              </button>
              <button type="submit" className="btn btn-outline-primary">
                Save
                <FontAwesomeIcon icon="save" className="ml-2"></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
