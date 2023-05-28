const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const body = document.body;
body.appendChild(wrapper);

// header
const headerWrapper = document.createElement("header");
headerWrapper.classList.add("headerWrapper");
wrapper.appendChild(headerWrapper);

const header = document.createElement("div");
header.classList.add("header");
headerWrapper.appendChild(header);

const logoHeader = document.createElement("div");
logoHeader.classList.add("logoHeader");
header.appendChild(logoHeader);
logoHeader.textContent = "WIELDBERRIES";

const searhHeader = document.createElement("input");
searhHeader.classList.add("searhHeader");
searhHeader.id = "searhHeader"
header.appendChild(searhHeader);
searhHeader.placeholder = "Я ищу...";

const shoppingCartHeader = document.createElement("button");
shoppingCartHeader.classList.add("shoppingCartHeader");
header.appendChild(shoppingCartHeader);


const shoppingCartHeaderImg = document.createElement('div');
shoppingCartHeaderImg.classList.add('shoppingCartHeaderImg');
shoppingCartHeader.appendChild(shoppingCartHeaderImg);

const shoppingCartHeaderText = document.createElement('div');
shoppingCartHeaderText.classList.add("shoppingCartHeaderText");
shoppingCartHeader.appendChild(shoppingCartHeaderText)
shoppingCartHeaderText.textContent = "Корзина";

// slide
const slider = document.createElement("div");
slider.classList.add("slider");
wrapper.appendChild(slider);

const sliderLine = document.createElement("div");
sliderLine.classList.add("sliderLine");
slider.appendChild(sliderLine);

const img1 = document.createElement("img");
img1.src = 'https://photos.wbstatic.net/bners1/big_sklad_11044895656.jpg'
img1.classList.add("sliderLineImg");
img1.classList.add("acti");
sliderLine.appendChild(img1)

const img2 = document.createElement("img");
img2.src = 'https://photos.wbstatic.net/bners1/big_shoes_1104_1484855.jpg'
img2.classList.add("sliderLineImg");
sliderLine.appendChild(img2)

const img3 = document.createElement("img");
img3.src = 'https://photos.wbstatic.net/bners1/48384959555.jpg'
img3.classList.add("sliderLineImg");
sliderLine.appendChild(img3)

const img4 = document.createElement("img");
img4.src = 'https://photos.wbstatic.net/bners1/big_dacha_11044845.jpg'
img4.classList.add("sliderLineImg");
sliderLine.appendChild(img4)

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("buttonWrapper");
wrapper.appendChild(buttonWrapper)

const buttonBack = document.createElement("button");
buttonBack.classList.add("buttonBack");
buttonWrapper.appendChild(buttonBack);

const buttonCircle = document.createElement("div");
buttonCircle.classList.add("buttonCircle");
buttonWrapper.appendChild(buttonCircle)

const circle1 = document.createElement("span");
circle1.classList.add("circle");
buttonCircle.appendChild(circle1);

const circle2 = document.createElement("span");
circle2.classList.add("circle");
buttonCircle.appendChild(circle2)

const circle3 = document.createElement("span");
circle3.classList.add("circle");
buttonCircle.appendChild(circle3)

const circle4 = document.createElement("span");
circle4.classList.add("circle");
buttonCircle.appendChild(circle4)

const buttonNext = document.createElement("button");
buttonNext.classList.add("buttonNext");
buttonWrapper.appendChild(buttonNext);

//хиты продаж
const topSellersWrapper = document.createElement("div");
topSellersWrapper.classList.add("topSellersWrapper");
wrapper.appendChild(topSellersWrapper);

const topSellers = document.createElement("div");
topSellers.classList.add("topSellers");
topSellersWrapper.appendChild(topSellers);
topSellers.textContent = "Хиты продаж";

// товары
const productsWrapper = document.createElement("div");
productsWrapper.classList.add("productsWrapper");
wrapper.appendChild(productsWrapper);


//footer
const footerWrapper = document.createElement("div");
footerWrapper.classList.add("footerWrapper");
wrapper.appendChild(footerWrapper);

const footerContainer = document.createElement("div");
footerContainer.classList.add("footerContainer");
footerWrapper.appendChild(footerContainer);

const footerInfo = document.createElement("div");
footerInfo.classList.add("footerInfo");
footerContainer.appendChild(footerInfo);

const footerInfoBuyers = document.createElement("ul")
footerInfoBuyers.classList.add("footerInfoBuyers");
footerInfo.appendChild(footerInfoBuyers);
footerInfoBuyers.textContent = 'Покупателям';

const footerInfoBuyersLi1 = document.createElement("li")
footerInfoBuyersLi1.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi1);

footerInfoBuyersLi1.textContent = 'Способы оплаты'

const footerInfoBuyersLi2 = document.createElement("li")
footerInfoBuyersLi2.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi2);
footerInfoBuyersLi2.textContent = 'Возврат товара'

const footerInfoBuyersLi3 = document.createElement("li")
footerInfoBuyersLi3.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi3);
footerInfoBuyersLi3.textContent = 'Правила продажи товаров'

const footerInfoBuyersLi4 = document.createElement("li")
footerInfoBuyersLi4.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi4);
footerInfoBuyersLi4.textContent = 'Доставка'

const footerInfoBuyersLi5 = document.createElement("li")
footerInfoBuyersLi5.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi5);
footerInfoBuyersLi5.textContent = 'Возврат денежных средств'

const footerInfoBuyersLi6 = document.createElement("li")
footerInfoBuyersLi6.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi6);
footerInfoBuyersLi6.textContent = 'Правила пользования торговой площадкой'

const footerInfoBuyersLi7 = document.createElement("li")
footerInfoBuyersLi7.classList.add("footerInfoBuyersLi");
footerInfoBuyers.appendChild(footerInfoBuyersLi7);
footerInfoBuyersLi7.textContent = 'Политика обработки персональных данных'



const footerInfoPartners = document.createElement("ul")
footerInfoPartners.classList.add("footerInfoPartners");
footerInfo.appendChild(footerInfoPartners);
footerInfoPartners.textContent = 'Партнерам'

const footerInfoPartnersLi1 = document.createElement("li")
footerInfoPartnersLi1.classList.add("footerInfoPartnersLi");
footerInfoPartners.appendChild(footerInfoPartnersLi1);
footerInfoPartnersLi1.textContent = 'Продавайте на Wildberries'

const footerInfoProject = document.createElement("ul")
footerInfoProject.classList.add("footerInfoProject");
footerInfo.appendChild(footerInfoProject);
footerInfoProject.textContent = 'Наши проекты'

const footerInfoProjectLi1 = document.createElement("li")
footerInfoProjectLi1.classList.add("footerInfoProjectLi");
footerInfoProject.appendChild(footerInfoProjectLi1);
footerInfoProjectLi1.textContent = 'WB Guru'

const footerInfoProjectLi2 = document.createElement("li")
footerInfoProjectLi2.classList.add("footerInfoProjectLi");
footerInfoProject.appendChild(footerInfoProjectLi2);
footerInfoProjectLi2.textContent = 'Трудоустройство'

const footerInfoProjectLi3 = document.createElement("li")
footerInfoProjectLi3.classList.add("footerInfoProjectLi");
footerInfoProject.appendChild(footerInfoProjectLi3);
footerInfoProjectLi3.textContent = 'Цифровые товары'


const footerInfoCompany = document.createElement("ul")
footerInfoCompany.classList.add("footerInfoCompany");
footerInfo.appendChild(footerInfoCompany);
footerInfoCompany.textContent = 'Компания'


const footerInfoCompanyLi1 = document.createElement("li")
footerInfoCompanyLi1.classList.add("footerInfoCompanyLi");
footerInfoCompany.appendChild(footerInfoCompanyLi1);
footerInfoCompanyLi1.textContent = 'О нас'

const footerInfoCompanyLi2 = document.createElement("li")
footerInfoCompanyLi2.classList.add("footerInfoCompanyLi");
footerInfoCompany.appendChild(footerInfoCompanyLi2);
footerInfoCompanyLi2.textContent = 'Контакты'

const footerInfoCompanyLi3 = document.createElement("li")
footerInfoCompanyLi3.classList.add("footerInfoCompanyLi");
footerInfoCompany.appendChild(footerInfoCompanyLi3);
footerInfoCompanyLi3.textContent = 'Вакансии'


const footerSocial = document.createElement("div");
footerSocial.classList.add("footerSocial");
footerContainer.appendChild(footerSocial);

const footerSocialVk = document.createElement("ul")
footerSocialVk.classList.add("footerSocialVk");
footerSocial.appendChild(footerSocialVk);
footerSocialVk.textContent = 'Мы в соцсетях';

const footerSocialVkLi1 = document.createElement('li');
footerSocialVkLi1.classList.add("footerSocialVkLi");
footerSocialVk.appendChild(footerSocialVkLi1);
footerSocialVkLi1.textContent = 'Вконтакте'

const footerSocialVkLi2 = document.createElement('li');
footerSocialVkLi2.classList.add("footerSocialVkLi");
footerSocialVk.appendChild(footerSocialVkLi2);
footerSocialVkLi2.textContent = 'Одноклассники'

const footerSocialVkLi3 = document.createElement('li');
footerSocialVkLi3.classList.add("footerSocialVkLi");
footerSocialVk.appendChild(footerSocialVkLi3);
footerSocialVkLi3.textContent = 'YouTube'

const footerInfoApps = document.createElement("div")
footerInfoApps.classList.add("footerInfoApps");
footerSocial.appendChild(footerInfoApps);


const footerInfoAppsMobile = document.createElement("div");
footerInfoAppsMobile.classList.add("footerInfoAppsMobile");
footerInfoApps.appendChild(footerInfoAppsMobile)
footerInfoAppsMobile.textContent = 'Мобильные устройства'

const footerInfoAppsLi1 = document.createElement('div');
footerInfoAppsLi1.classList.add("footerInfoAppsDiv1");
footerInfoApps.appendChild(footerInfoAppsLi1);


const footerInfoAppsLi2 = document.createElement('div');
footerInfoAppsLi2.classList.add("footerInfoAppsDiv2");
footerInfoApps.appendChild(footerInfoAppsLi2);


const footerInfoAppsLi3 = document.createElement('div');
footerInfoAppsLi3.classList.add("footerInfoAppsDiv3");
footerInfoApps.appendChild(footerInfoAppsLi3);

const footerSecondContainer = document.createElement('div');
footerSecondContainer.classList.add("footerSecondContainer");
footerWrapper.appendChild(footerSecondContainer);

const footerSecondContainerInfo = document.createElement("div");
footerSecondContainerInfo.classList.add("footerSecondContainerInfo");
footerSecondContainer.appendChild(footerSecondContainerInfo);
footerSecondContainerInfo.textContent = 'ООО «ИМВБРБ», г. Минск, ул.Скрыганова 6а, помещение 8, офис 35 УНП 193630204 (свидетельство о государственной регистрации юридического лица выдано Минским горисполкомом от 06.06.2022 г. №0198794 Дата включения сведений об интернет-магазине в Торговый реестр Республики Беларусь 01.07.2022 Телефон для связи: +375 17 388 60 00 Режим работы: круглосуточно'

const footerSecondContainerInfoSecond = document.createElement("div");
footerSecondContainerInfoSecond.classList.add("footerSecondContainerInfoSecond");
footerSecondContainer.appendChild(footerSecondContainerInfoSecond);
footerSecondContainerInfoSecond.textContent = 'Лицо, уполномоченное продавцом рассматривать обращения покупателей о нарушении их прав, предусмотренных законодательством о защите прав потребителей – Падера Ольга Викторовна, тел. +375 17 388 60 22 Номера городских телефонов уполномоченных по защите прав потребителей: +375 17 272 73 84 – администрация Фрунзенского района г. Минска +375 17 218 00 82 – главное управление торговли и услуг Мингорисполкома'

const footerThirdContainer = document.createElement('div');
footerThirdContainer.classList.add("footerThirdContainer");
footerWrapper.appendChild(footerThirdContainer);

const footerThirdContainerInfo = document.createElement("div");
footerThirdContainerInfo.classList.add("footerThirdContainerInfo");
footerThirdContainer.appendChild(footerThirdContainerInfo);
footerThirdContainerInfo.textContent = `2004—2023 © Wildberries — модный интернет-магазин одежды, обуви и аксессуаров. Все права защищены.`


const footerThirdContainerInfoSecond = document.createElement("div");
footerThirdContainerInfoSecond.classList.add("footerThirdContainerInfoSecond");
footerThirdContainer.appendChild(footerThirdContainerInfoSecond);



export {
  wrapper,
  body,
  headerWrapper,
  header,
  logoHeader,
  searhHeader,
  shoppingCartHeader,
  shoppingCartHeaderText,
  shoppingCartHeaderImg,
  topSellersWrapper,
  topSellers,
  productsWrapper,
  slider,
  sliderLine,
  img1,
  img2,
  img3,
  img4,
  buttonNext,
  buttonBack,
  buttonCircle,
  footerInfoAppsLi1,
  
};
