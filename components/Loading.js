import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center>
      <div>
        <img
          src="https://i0.wp.com/image.similarpng.com/very-thumbnail/2020/07/Whatsapp-logo-on-transparent-background-PNG-(3).png"
          style={{ marginBottom: 10 }}
          height={200}
        />
      </div>
      <Circle color="#3cbc28" size={60} />
    </center>
  );
}

export default Loading;
