import { useHistory } from "react-router-dom";
import { Button} from 'antd'


function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/companies");
  }

  return (
    <Button  onClick={handleClick}>
      Back To Homepage
    </Button>
  );
}

export default HomeButton;