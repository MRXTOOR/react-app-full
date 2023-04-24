import Greation from './Greation';
import style from './style.module.css';

const loginPage = () => {
    const name = "Harry"
    return(
        <div>
            <h1 className={style.heading}>This login Page</h1>
            <Greation name={name}/>
        </div>
    )
}

export default loginPage;