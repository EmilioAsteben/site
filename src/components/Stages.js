import '../stages.scss';

function Stages(){

    return(

        <div className = 'stages__modal'>
            <div className="stages__modal__inner">
            <h3>Этапы разработки сайта:</h3>

            <ol>
                <li>Прием заявки.</li>
                <li>Обсуждение содержания, схемы, и дизайна сайта.</li>
                <li>Утверждение схемы и дизайна.</li>
                <li>Разработка сайта</li>
                <li>Внесение правок</li>
                <li>Регистрация домена и хостинга(оплачиваются отдельно)</li>
                <li>Загрузка сайта на хостинг</li>
                <li>Передача данных учетных записей.</li>
            </ol>
        </div>
        </div>

    )
}

export default Stages;