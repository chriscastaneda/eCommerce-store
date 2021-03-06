import React from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Image,
  Message,
  Header,
  Icon
} from "semantic-ui-react";
import axois from 'axios'
import baseYrl from '../utils/baseUrl'

/**Object template */
const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
};

function CreateProduct() {
  /**Update object */
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);

  /**Media Preview Handler*/
  const [mediaPreview, SetMediaPrview] = React.useState("");

  /**Success Message Handler*/
  const [success, setSuccess] = React.useState(false);

  /**Pass user field input to updated object */
  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === "media") {
      /**If adding uploading image */
      setProduct(prevState => ({
        /**get image from file array[0] */
        ...prevState,
        media: files[0]
      }));

      /**Media Preview */
      SetMediaPrview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }));
    }
  }

  /**Cloudinary,com images Post Request */
  async function handleImageUpload{
    const data = new FormData()
    data.append('file', product.media) /**key*/
    data.append('upload_preset', 'reactreserve') 
    data.append('cloud_name', 'reedbargercodes') /**dashboard cloud name */
    const repsonse = await axios.post
    (process.env.CLOUDINARY_URL, data)
    const mediaUrl = response.data.url 
    return mediaUrl;
  }

  /**Submit form success Handler*/
  function handleSubmit(event) {
    event.preventDefault();
    /**Cloudianry get request and spread to page */
    const mediaUrl = await handleImageUpload()
    console.log({ mediaUrl})
    //const url = `${baseUrl}/api/product`
    //const payload = { ...product, mediaUrl } = product
    //const payload = { name, price, description, mediaUrl };
    //await axios.post(url, payload); /**post request to cloudinary */
    setProduct(INITIAL_PRODUCT); /**reset fields */
    setSuccess(true); /**Display Success message */
  }

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" /*Header*/ />
        Create New Product
      </Header>
      <Form success={success} onSubmit={handleSubmit} /**Input Fields */>
        <Message /**Success Message */
          success
          icon="check"
          header="Success!"
          content="Your product has has been posted"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="name"
            label="Name"
            placeholder="Name"
            value={product.name} /**Reset field after submit */
            onChange={handleChange} /*Get info from fields */
          />

          <Form.Field
            control={Input}
            name="price"
            label="Price"
            placeholder="Price"
            min="0.00"
            step="0.001"
            type="number"
            value={product.price} /**Reset field after submit */
            onChange={handleChange} /*Get info from fields */
          />

          <Form.Field
            control={Input}
            name="media"
            type="file"
            label="Media"
            accept="image/*"
            content="Select Image"
            onChange={handleChange} /*Get info from fields */
          />
        </Form.Group>

        <Image /*Media Preview*/
          src={mediaPreview}
          rounded
          centered
          size="small"
        />

        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          value={product.description} /**Reset field after submit */
          onChange={handleChange} /*Get info from fields */
        />
        <Form.Field
          control={Button}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
        />
      </Form>
    </>
  );
}

export default CreateProduct;
