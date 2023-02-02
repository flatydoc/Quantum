import styles from "./Target.module.scss";
import { Button } from "../../../ui/Button/Button";

export const Target = () => {
  return (
    <div className={styles.target}>
      <img
        className={styles.img}
        src={require("../../../../assets/images/target.jpg")}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>Реклама в социальных сетях</h3>
        <p className={`${styles.subtitle} ${styles.blue}`}>
          ВКОНТАКТЕ, INSTAGRAM, FACEBOOK, TIKTOK
        </p>
        <p className={styles.desc}>
          В ленте ваших социальных сетей есть реклама товаров и услуг, которыми
          вы интересовались сегодня, вчера, позавчера или еще раньше. Возможно,
          заходили на сайты с телевизорами, а потом эти телевизоры преследуют
          вас везде. Или вы разговаривали с кем-то, а телефон лежал рядом, и
          теперь вы видите товары, о которых говорили совсем недавно. Замечали
          такое? Хотите знать, как это работает и заказать для своего бизнеса?
        </p>
        <p className={styles.subtitle}>
          СТОИМОСТЬ НАСТРОЙКИ ТАРГЕТИРОВАННОЙ РЕКЛАМЫ:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Настройка рекламной компании –
            <span className={styles.blue}> от 300 BYN</span>
          </li>
          <li className={styles.listItem}>
            Лидогенерация для небольшой компании –
            <span className={styles.blue}> от 400 BYN</span>
          </li>
          <li className={styles.listItem}>
            Лидогенерация для средней и крупной компании –
            <span className={styles.blue}> от 500 BYN</span>
          </li>
        </ul>
        <p className={styles.desc}>
          Мы продадим для вас все, что покупают в интернете! Оставьте заявку, и
          мы посчитаем бюджет.
        </p>
        <Button to={"target"} btnText={"ПОДРОБНЕЕ"} />
      </div>
    </div>
  );
};
