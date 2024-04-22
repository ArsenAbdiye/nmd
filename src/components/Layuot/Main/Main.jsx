import React from 'react';
import Swiper from '../Main/Swiper'
const Main = () => {
    return (
        <div className='main'>
            <section className='first'>
                <div className="logo-text">
                    <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/nomad-logo.png" alt="" />
                    <h1>NOMAD COLLEGE</h1>
                </div>
                <h1>Самый передовой колледж Кыргызстана</h1>
                <h2>Живи для учения, учись для жизни..</h2>
                <button>професии будущего</button>
                <button>свяжитесь с нами</button>
            </section>
            <section className='second'>
                <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/eksterer-1.png" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus sed iste. Laudantium quos itaque quas ipsam vitae, recusandae aspernatur? Soluta dolor ducimus fugit aut fugiat voluptatum. Ut, necessitatibus? Veniam.      
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati excepturi ipsam velit. Facere consequuntur, ea alias officiis dolorem illum dolor eligendi architecto maiores, repellendus delectus error, eum recusandae aperiam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt eaque tempore adipisci deserunt libero quibusdam architecto. Aspernatur cum asperiores reprehenderit! Ullam perferendis minus facere accusantium ad deserunt rerum ut.
                </p>
            </section>
            <Swiper/>
            <section className='cards'>
                <h1>Направления подготовки COLLEGE</h1>
                <p>Длительность обучения - 2 годы 10 месяцев</p>
                <div className="cardss">
                    <div className='card card1'>
                    <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro accusamus in natus blanditiis sequi minima numquam cumque iure quis, quidem laudantium ipsum et, rem nobis pariatur molestiae eius dolorum.</p></div>
                        <p className='pp'>программирование</p>
                    </div>
                    <div className='card card2'>
                    <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro accusamus in natus blanditiis sequi minima numquam cumque iure quis, quidem laudantium ipsum et, rem nobis pariatur molestiae eius dolorum.</p></div>
                        <p className='pp'>Переводчик </p>
                    </div>
                    <div className='card card3'>
                    <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro accusamus in natus blanditiis sequi minima numquam cumque iure quis, quidem laudantium ipsum et, rem nobis pariatur molestiae eius dolorum.</p></div>
                        <p className='pp'>Цифровой маркетинг</p>
                    </div>
                    <div className='card card4'>
                    <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro accusamus in natus blanditiis sequi minima numquam cumque iure quis, quidem laudantium ipsum et, rem nobis pariatur molestiae eius dolorum.</p></div>
                        <p className='pp'>Право и комуникация</p>
                    </div>
                    <div className='card card5'>
                    <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro accusamus in natus blanditiis sequi minima numquam cumque iure quis, quidem laudantium ipsum et, rem nobis pariatur molestiae eius dolorum.</p></div>
                        <p className='pp'>Финансовая аналитика</p>
                    </div>
                    <div className='card card6'>
                    <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro accusamus in natus blanditiis sequi minima numquam cumque iure quis, quidem laudantium ipsum et, rem nobis pariatur molestiae eius dolorum.</p></div>
                        <p className='pp'>Графический дизайн</p>
                    </div>
                </div>
            </section>
            <section className='cost'>
                <h1>СТОИМОСТЬ ОБУЧЕНИЯ</h1>
                <p>При высоком уровне обучения и самых передовых условий для студентов, цена годового контракта в нашем колледже сохранена на среднем рыночном уровне</p>
                <div className="table">
                    <table>
                        <tr>
                            <td><img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-3.png" alt="" /> it бизнес</td>
                            <td>160 000 сом в год</td>
                        </tr>
                        <tr>
                            <td><img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-7.png" alt="" /> Перевод и международные медиа</td>
                            <td>100 000 сом в год</td>
                        </tr>
                        <tr>
                            <td><img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-13.png" alt="" /> Цифровой маркетинг</td>
                            <td>100 000 сом в год</td>
                        </tr>
                        <tr>
                            <td><img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-4.png" alt="" /> Бизнес право</td>
                            <td>100 000 сом в год</td>
                        </tr>
                        <tr>
                            <td><img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/to-new-postup-12.png" alt="" /> Финансовые технологии в бизнесе </td>
                            <td>100 000 сом в год</td>
                        </tr>
                        <tr>
                            <td><img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/design.png" alt="" /> Графический дизайн</td>
                            <td>100 000 сом в год</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className='back2'>
            </section>
            <section className='links'>
                <h1>Свяжитесь с нами и получите подробную консультацию</h1>
                <div className="link">
                    <div className='element'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/location-1.png" alt="" />
                        <h2>Адрес</h2>
                        <p>Кыргызстан, г. Бишкек, ул. 7 апреля 4А</p>
                    </div>
                    <div className='element'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/call-1.png" alt="" />
                        <h2>Телефон</h2>
                        <p>Кыргызстан, г. Бишкек, ул. 7 апреля 4А</p>
                    </div>
                    <div className='element'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/email-1.png" alt="" />
                        <h2>e-mail</h2>

                        <p>Кыргызстан, г. Бишкек, ул. 7 апреля 4А</p>
                    </div>
                    <div className='element'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/whatsapp-1.png" alt="" />
                        <h2>whatsapp</h2>
                        <p>Кыргызстан, г. Бишкек, ул. 7 апреля 4А</p>
                        
                    </div>
                    <div className='element'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/telegram-1.png" alt="" />
                        <h2>Telegram</h2>
                        <p>Кыргызстан, г. Бишкек, ул. 7 апреля 4А</p>
                    </div>
                    <div className='element'>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/instagram-1.jpg.png" alt="" />
                        <h2>Instagram</h2>
                        <p>Кыргызстан, г. Бишкек, ул. 7 апреля 4А</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Main;