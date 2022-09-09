import propTypes from 'prop-types';
import { MainTitle, ListInfo, UlInfo, Info } from "./Statistics.styled";

const Data = ({data}) => {
    return (
        <ListInfo className="item" >
           <Info className="label">{data.label}</Info>
           <Info className="percentage">{data.percentage}%</Info>
        </ListInfo>
     )
};
export const Statistics = ({title, data}) => {
    return (
        <section className='statistics'>
            {title && <MainTitle>{title}</MainTitle>}
            <UlInfo>
                {data.map((data) => {
                    return (
                        <Data key={data.id} data={data} />
                    )
                })}
            </UlInfo>

        </section>
    )

};

Statistics.propTypes = {
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,  
}.isRequired
