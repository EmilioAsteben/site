import '../cardModal.scss';


function CardModal(props){

return(
<div className = 'card__modal__inner'>

<div className="left__inner">
<img className = 'tablet__img' src={props.content.images.tablet} alt="tablet"/>


</div>
<div className="right__inner">
    <section className = 'modal__top__inner'>
    {props.content.heading}
    {props.content.text}
    </section>
    {props.content.list}


</div>

</div>
    )
}

export default CardModal;