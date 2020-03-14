import React from "react";
import { Header, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useRouter } from "next/router";

/**components */
function ProductAttributes({ description, _id }) {
  const [modal, setModal] = React.useState(false); /*trash button switch */
  const router = useRouter(); /*redirect to home page after delete */

  /**Delete Function */
  async function handleDelete() {
    const url = `${baseUrl}/api/product`;
    const payload = { params: { _id } };
    await axios.delete(url, payload);
    router.push("/");
  }

  return (
    <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Button
        icon="trash alternate outline"
        color="red"
        content="Delete Product"
        onClick={() => setModal(true)} /*If click, trigger React.useState */
      />

      <Modal open={modal} dimmer="blurring" /**Deletet Menu */>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => setModal(false)} /**Hide menu */
            content="Cancel"
          />
          <Button
            negative
            icon="trash"
            labelPosition="right"
            content="Delete"
            onClick={handleDelete} /**Delete trigger */
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ProductAttributes;
