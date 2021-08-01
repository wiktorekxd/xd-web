import Header from '../header/header';
import Main from './main/main';
import "./dashboard.scss";

export default function Dashboard() {
  return (
      <div className="dashBoard">
      <Header />
      <Main />
      <div className="background-image-ctn">
        <div  className="fading-ctn">
        </div>
      </div>
    </div>
  )
}
