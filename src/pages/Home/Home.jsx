import React, { useState } from "react";
import cl from "./Home.module.css";
import InputMask from "react-input-mask";
import Modal from "../../UI/Modal/Modal";
import image from "../../assets/confirm.png";

const Home = () => {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const product = {
    name: "Аннигиляторная пушка",
    price: 15000,
    brand: "Infinity",
    category: "Price Production",
    quantity: 1,
  };

  async function sendMessage() {
    const data = [];
    data.push({
      name,
      phone,
      email,
      message,
    });

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email != undefined && email.toLowerCase().match(validRegex)) {
      setEmailError(false);
      setEmail("");
      setPhone("");
      setName("");
      setMessage("");

      setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 3000);
    } else {
      setEmailError(true);
    }
  }

  return (
    <div className={cl.HomeMainContainer}>
      <Modal Modal={modal}>
        <div className={cl.confirmMessage}>
          <img className={cl.confirmMessageImage} src={image} alt="test" />
          <h3 className={cl.confirmMessageTitle}>Усе! Данные ушли о/</h3>
        </div>
      </Modal>
      <section className={cl.EcommerceContainer}>
        <h2>Электронная коммерция</h2>
        <div className={cl.EcommerceList}>
          <button
            className={cl.ecomButton}
            onClick={() => {
              window.ym(95583000, "params", {
                __ym: {
                  ecommerce: [
                    {
                      currencyCode: "RUB",
                      impressions: [
                        {
                          name: product.name,
                          id: "10",
                          brand: product.brand,
                          category: product.category,
                          price: product.price,
                          quantity: product.quantity,
                          list: "Орудие",
                        },
                      ],
                    },
                  ],
                },
              });
            }}
          >
            Просмотр списка товаров
          </button>
          <button
            className={cl.ecomButton}
            onClick={() => {
              window.ym(95583000, "params", {
                __ym: {
                  ecommerce: [
                    {
                      currencyCode: "RUB",
                      detail: {
                        products: [
                          {
                            name: product.name,
                            id: "10",
                            brand: product.brand,
                            category: product.category,
                            price: product.price,
                            quantity: product.quantity,
                            list: "Орудие",
                          },
                        ],
                      },
                    },
                  ],
                },
              });
            }}
          >
            Просмотр товара
          </button>
          <button
            className={cl.ecomButton}
            onClick={() => {
              window.ym(95583000, "params", {
                __ym: {
                  ecommerce: [
                    {
                      currencyCode: "RUB",
                      add: {
                        products: [
                          {
                            name: product.name,
                            id: "10",
                            brand: product.brand,
                            category: product.category,
                            price: product.price,
                            quantity: product.quantity,
                            list: "Орудие",
                          },
                        ],
                      },
                    },
                  ],
                },
              });
            }}
          >
            Добавление товара в корзину
          </button>
          <button
            className={cl.ecomButton}
            onClick={() => {
              window.ym(95583000, "params", {
                __ym: {
                  ecommerce: [
                    {
                      currencyCode: "RUB",
                      remove: {
                        products: [
                          {
                            name: product.name,
                            id: "10",
                            brand: product.brand,
                            category: product.category,
                            price: product.price,
                            quantity: product.quantity,
                            list: "Орудие",
                          },
                        ],
                      },
                    },
                  ],
                },
              });
            }}
          >
            Удаление товара из корзины
          </button>
          <button
            className={cl.ecomButton}
            onClick={() => {
              window.ym(95583000, "params", {
                __ym: {
                  ecommerce: [
                    {
                      currencyCode: "RUB",
                      purchase: {
                        actionField: { id: "1", revenue: product.price },
                        products: [
                          {
                            name: product.name,
                            id: "10",
                            brand: product.brand,
                            category: product.category,
                            price: product.price,
                            quantity: product.quantity,
                          },
                        ],
                      },
                    },
                  ],
                },
              });
            }}
          >
            Покупка
          </button>
        </div>
      </section>
      <section className={`container-fluid ${cl.contactFormContainer}`}>
        <div className="row">
          <div className="col-12">
            <h2 className={cl.callbackFormTitle}>
              Остались вопросы? Свяжитесь с нами!
            </h2>
            <form method="post" className={cl.formCase}>
              <div className={cl.formInput} style={{ marginBottom: 20 }}>
                <label>Имя</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className={cl.formInput} style={{ marginBottom: 20 }}>
                <label>Email</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailError ? (
                  <label className={cl.errorEmail}>
                    Некорректный email. Все хорошо?
                  </label>
                ) : null}
              </div>
              <div className={cl.formInput} style={{ marginBottom: 20 }}>
                <label>Телефон</label>
                <InputMask
                  mask="+9 (999) 999-99-99"
                  placeholder="+7 (000) 000-00-00"
                  maskChar={null}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={cl.formInput} style={{ marginBottom: 20 }}>
                <label>Сообщение</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className={cl.textarea}
                  placeholder="Сообщение"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className={cl.formButton}
                onClick={() => sendMessage()}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
