import React from "react";
import cl from "./ContentMicrodata.module.css";

const ContentMicrodata = () => {
  return (
    <div
      className={cl.microdataContainer}
      itemScope
      itemtype="http://schema.org/Article"
    >
        <meta itemprop="datePublished" content="2024-09-08T012:56:49Z" />
        
      <meta itemprop="identifier" content="MicrodataArticle" />
      <h2 className={cl.microdataHead} itemprop="headline">
        Устранение неполадок с сетью в Windows [Microdata]
      </h2>
      <div className={cl.microdataAticleContainer} itemprop="articleBody">
        <p>
          Для решения большинства компьютерных проблем можно самостоятельно
          найти ответы в справке и поддержке Windows. Далее представлены
          некоторые указатели по справке для конкретных типов неполадок.
        </p>
        <div className={cl.microdataArticleListContainer}>
          <p>При работе в сети чаще всего возникают следующие ошибки:</p>
          <ul className={cl.microdataArticleList}>
            <li className={cl.microdataArticleListElement}>
              неполадки при обнаружении беспроводных сетей;
            </li>
            <li className={cl.microdataArticleListElement}>
              неполадки при обнаружении компьютеров домашней сети;
            </li>
            <li className={cl.microdataArticleListElement}>
              неполадки с сетью и подключением к Интернету.
            </li>
          </ul>
        </div>
        <p>
          Чтобы устранить неполадки при поиске беспроводных сетей, необходимо
          следовать следующим инструкциям. Если на компьютере установлен
          беспроводной сетевой адаптер, Windows автоматически найдет
          беспроводные сети, находящиеся в радиусе действия компьютера. В окне
          «<span itemprop="about">Подключение к сети</span>» можно просмотреть список беспроводных сетей,
          обнаруженный Windows. Если Windows не нашла сеть, которая должна быть
          в радиусе действия компьютера, причины могут быть следующими:
        </p>
        <p>
          - Переключатель режима работы беспроводной сети выключен. Многие
          переносные компьютеры оборудованы переключателем режима работы
          беспроводной сети, который располагается на передней или боковой
          панели компьютера. Посмотрите, установлен ли такой переключатель на
          компьютере. Если ответ положительный, то убедитесь, что он включен. В
          некоторых компьютерах переключение может осуществляться одновременным
          нажатием различных сочетаний функциональных клавиш. Сведения о
          расположении переключателя режима работы беспроводной сети могут быть
          приведены в документации, которая поставляется с компьютером.
        </p>
        <p>
          - Компьютер находится слишком далеко от беспроводного маршрутизатора
          или точки доступа. Для маршрутизаторов и точек доступа стандарта
          802.11b или 802.11g максимальная длина передачи сигнала составляет 46
          метров в здании и 92 метра на открытой местности. Для маршрутизаторов
          и точек доступа стандарта 802.11а максимальная длина передачи сигнала
          составляет 15 метров в здании и 30 метров на открытой местности.
          Данные цифры приведены для оптимальных условий при отсутствии помех.
          Следует убедиться, что компьютер находится в зоне действия
          маршрутизатора или точки доступа и расположен к ним настолько близко,
          насколько возможно. Если компьютер переносной, попробуйте переместить
          его в другое место, в котором сигнал принимается лучше.
        </p>
        <p>
          - Беспроводной маршрутизатор или точка доступа выключены или работают
          неправильно. Убедитесь в том, что беспроводной маршрутизатор или точка
          доступа включены и индикатор радиосигнала горит. Выключите
          маршрутизатор или точку доступа как минимум на 10 секунд, а затем
          включите снова. Сброс маршрутизатора или точки доступа приведет к
          временному отключению от сети всех пользователей. Если у вас нет
          доступа для управления точкой доступа или сетью, обратитесь к сетевому
          администратору.
        </p>
        <p>
          - Другие устройства создают помехи. Некоторые устройства могут
          создавать помехи между компьютером и сетями, находящимися в зоне
          досягаемости. Например, микроволновые печи и некоторые беспроводные
          телефоны работают на частоте 2,4 ГГц. Такая частота также используется
          сетевым оборудованием стандартов 802.11b и 802.11g. Некоторые
          беспроводные телефоны работают на частоте 5 ГГц, которая используется
          сетевым оборудованием стандарта 802.11а. Существует 2 варианта выхода
          из этой ситуации: 1. Если подобные устройства находятся неподалеку от
          компьютера, временно отключите их или переместите на отдаленное
          расстояние. 2. Измените настройки маршрутизатора или точки доступа,
          чтобы они использовали другой радиоканал, или установите
          автоматический выбор канала, если используется фиксированный канал.
          Иногда прием по одним радиоканалам может быть более четким, чем по
          другим. В США и Канаде можно использовать каналы 1, 6 и 11.
        </p>
        <p>
          - Система Windows не настроена на подключение к необходимому типу
          сети.
        </p>
        <p>
          - Маршрутизатор или точка доступа заняты. Если маршрутизатор или точка
          доступа используются несколькими компьютерами, такая загрузка может
          препятствовать обработке новых запросов. Если к сети подключены другие
          компьютеры, попробуйте временно отключить их.
        </p>
        <p>
          - Искомая сеть настроена на нераспространение сетевого имени (SSID).
        </p>
        <p>
          Беспроводные маршрутизаторы и точки доступа можно настроить так, чтобы
          они не вели широковещательной передачи сетевого имени. В таком случае
          невозможно обнаружить, находится ли компьютер в зоне досягаемости сети
          (чтобы подключиться к ней). Подключение возможно, только если оно уже
          осуществлялось раньше или если оно производится вручную, при помощи
          идентификатора набора служб (SSID).
        </p>
        <div className={cl.microdataArticleListContainer}>
          <p>
            Для подключения к сети, которая не осуществляет широковещательную
            трансляцию сигнала, выполните следующие действия:
          </p>
          <ul
            className={cl.microdataArticleList}
            style={{ listStyleType: "decimal" }}
          >
            <li className={cl.microdataArticleListElement}>
              Щелкните «Установка подключения или сети».
            </li>
            <li className={cl.microdataArticleListElement}>
              Щелкните «Подключиться к беспроводной сети вручную», а затем
              введите сведения о сети. Сеть будет занесена в список сетей, и к
              ней можно будет подключиться в будущем, когда она окажется в зоне
              досягаемости компьютера.
            </li>
          </ul>
        </div>
        <p>
          - Сетевой администратор заблокировал доступ к определенным сетям. Если
          компьютер подключен к корпоративной сети, возможно, сетевой
          администратор для управления доступом к беспроводным сетям использует
          групповую политику. Если в зоне досягаемости компьютера находится
          сеть, но ее не удается обнаружить или подключиться к ней из-за того,
          что сетевой администратор запретил к ней доступ, обратитесь за
          разъяснениями к сетевому администратору.
        </p>
        <h6 style={{ marginTop: 50 }}>
          Автор: <span itemprop="author">Евгений Буйный</span>
        </h6>
      </div>
    </div>
  );
};

export default ContentMicrodata;
