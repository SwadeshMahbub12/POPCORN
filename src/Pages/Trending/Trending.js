import axios from "axios"
import { useEffect,useState} from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css'
const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    
    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=ee10197c9fe1e79b7b6b14f06087e1c0&page=${page}`
        );


        setcontent(data.results);
    };

    useEffect(() => {
        fetchTrending();
    }, [page]);

    useEffect(() => {
         fetchTrending();
    }, []);
    return (
        <div className="trending">
            <span className='pageTitle'>Trending Now</span>
            <div className="trending">
                {content && content.map((c) => (
                    < SingleContent 
                    key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}
                    />
                ))}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    );
}

export default Trending
