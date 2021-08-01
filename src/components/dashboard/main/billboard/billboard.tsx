import Button from '@material-ui/core/Button';
import headlineImage from "../../../../img/headline.png";
import "./style.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import secondaryUseStyle from '../../../../common-components/btn/secondary-btn';


const Billboard = () => {
    return (
        <section className="billboard">
            <img className="headline-img" src={headlineImage} alt="headline-title" />
            <p className="description">sfa s ksjdfklajk jsk jas a fjlskdj fkjf lj lkfjdl ajsdl jskdf jsk jsjld jfsd fj fkjf
                dflk sdlf sdfj skdj flsdjf k gdf gds gdsg sdfg dg ds gsdf gsdf g dg sdg sdg dsg fg ffdg 
            </p>
            <div className="btn-ctn">
                <Button variant="contained" size="large" color="default" ><PlayArrowIcon  fontSize="large"/> Odtwórz</Button>
                <Button variant="contained" size="large" className={secondaryUseStyle().root} ><ErrorOutlineIcon fontSize="large" /> Więcej informacji</Button>
            </div>
        </section>
    )
}

export default Billboard
