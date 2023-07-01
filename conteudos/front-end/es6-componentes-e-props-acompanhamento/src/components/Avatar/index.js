import './styles.css';

export default function Avatar({avatar}) {
  return (
   <div className='avatar-img' style={{backgroundImage: `url(${avatar})`}}></div> 
 
    ) 
}
