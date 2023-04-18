import React from "react";

function Admin(props: any) {
  console.log("props", props);
  return <div>Admin</div>;
}

export default Admin;

export async function getServerSideProps(context: any) {
  return {
    props: {
      stuff: "things",
    },
  };
}
