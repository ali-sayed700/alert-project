import Alert from "./components/alert/Alert";
import { Ban, Bell, Check } from "lucide-react";

function App() {
  return (
    <>
      <Alert type="Error" title="alert error" icon={<Bell size={25} />}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          deleniti sed quia asperiores quo quidem, quas nobis explicabo
          distinctio minima expedita quibusdam neque. Omnis exercitationem,
          <a href="/">loriem</a> delectus consequatur tenetur dolorum nisi!
        </p>
      </Alert>
      <Alert
        type="success"
        title="alert success"
        icon={<Check size={25} />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti sed quia asperiores quo quidem, quas nobis explicabo distinctio minima expedita quibusdam neque. Omnis exercitationem, delectus consequatur tenetur dolorum nisi!"
      />
      <Alert
        type="warning"
        title="alert warning"
        icon={<Ban size={25} />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti sed quia asperiores quo quidem, quas nobis explicabo distinctio minima expedita quibusdam neque. Omnis exercitationem, delectus consequatur tenetur dolorum nisi!"
      />
    </>
  );
}

export default App;
