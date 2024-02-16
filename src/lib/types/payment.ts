// https://yookassa.ru/developers/api#create_payment
export interface ICreatePayment {
  amount: Amount; //Сумма платежа.
  description?: string; // Описание транзакции (не более 128 символов)
  receipt?: Receipt; // Данные для формирования чека.
  recipient?: Recipient; // Получатель платежа.
  payment_token?: string; //  Одноразовый токен для проведения оплаты, сформированный с помощью Checkout.js  или мобильного SDK.
  payment_method_id?: string; // Идентификатор сохраненного способа оплаты
  payment_method_data?: PaymentMethodData; // Данные для оплаты конкретным способом.
  confirmation?: Confirmation; // Данные, необходимые для инициирования выбранного сценария подтверждения платежа пользователем.
  save_payment_method?: boolean; // Сохранение платежных данных
  capture?: boolean; // Автоматический прием поступившего платежа.
  client_ip?: string; // IPv4 или IPv6-адрес пользователя. Если не указан, используется IP-адрес TCP-подключения.
  metadata?: Metadata; // Любые дополнительные данные, которые нужны вам для работы
  transfers?: Transfers; // Данные о распределении денег — сколько и в какой магазин нужно перевести.
  deal?: Deal; // Данные о сделке, в составе которой проходит платеж.
  fraud_data?: FraudData; // Информация для проверки операции на мошенничество.
  merchant_customer_id?: string;
}

// https://yookassa.ru/developers/api#payment_object
export interface IPaymentResponse {
  id: string; // Идентификатор платежа в ЮKassa.
  status: IPaymentStatus; // Статус платежа.
  amount: Amount; //Сумма платежа.
  income_amount?: IncomeAmount; // Сумма платежа, которую получит магазин.
  description?: string; // Описание транзакции (не более 128 символов)
  recipient: Recipient; // Получатель платежа.
  payment_method?: PaymentMethod; // Способ оплаты.
  captured_at?: string; // Время подтверждения платежа.
  created_at: string; // Время создания заказа.
  expires_at?: string; // Время, до которого вы можете бесплатно отменить или подтвердить платеж.
  confirmation?: Confirmation; // Выбранный способ подтверждения платежа.
  test: boolean; // Признак тестовой операции.
  refunded_amount?: Amount; // Сумма, которая вернулась пользователю.
  paid: boolean; // Признак оплаты заказа.
  refundable: boolean; // Возможность провести возврат по API.
  receipt_registration?: string; // Статус регистрации чека.
  metadata?: Metadata; // Любые дополнительные данные, которые нужны вам для работы
  cancellation_details?: CancellationDetails; // Комментарий к статусу canceled: кто отменил платеж и по какой причине.
  authorization_details?: AuthorizationDetails; // Данные об авторизации платежа.
  transfers?: Transfers; // Данные о распределении денег — сколько и в какой магазин нужно перевести.
  deal?: Deal; // Данные о сделке, в составе которой проходит платеж.
  merchant_customer_id?: string; // Идентификатор покупателя в вашей системе, например электронная почта или номер телефона. Не более 200 символов.
}

export type IPaymentStatus =
  | 'pending'
  | 'waiting_for_capture'
  | 'succeeded'
  | 'cancelled';

export interface Amount {
  value: string; // Сумма в выбранной валюте.
  currency: 'RUB' | string; // Трехбуквенный код валюты в формате ISO-4217.
}

export interface AuthorizationDetails {
  rrn?: string; // Retrieval Reference Number — уникальный идентификатор транзакции в системе эмитента. Используется при оплате банковской картой.
  auth_code?: string; // Код авторизации банковской карты.
  three_d_secure: ThreeDSecure; // Отображение пользователю формы для прохождения аутентификации по 3‑D Secure.
}

export interface ThreeDSecure {
  applied: boolean;
}

export interface Receipt {
  customer?: Customer; // Информация о пользователе..
  items: ReceiptItem[]; // Список товаров в чеке.
  phone?: string; // Телефон пользователя для отправки чека.
  email?: string; // Электронная почта пользователя для отправки чека.
  tax_system_code?: number; // Система налогообложения магазина (тег в 54 ФЗ — 1055).
  receipt_industry_details?: ReceiptIndustryDetails; // Отраслевой реквизит чека (тег в 54 ФЗ — 1261). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2.
  receipt_operational_details?: ReceiptOperationalDetails; // Операционный реквизит чека (тег в 54 ФЗ — 1270).
}

export interface ReceiptItem {
  description: string; // Название товара (от 1 до 128 символов). Тег в 54 ФЗ — 1030.
  amount: Amount; // Цена товара (тег в 54 ФЗ — 1079).
  vat_code: number; // Ставка НДС (тег в 54 ФЗ — 1199).
  quantity: string; // Количество товара (тег в 54 ФЗ — 1023).
  measure?: string; // Мера количества предмета расчета (тег в 54 ФЗ — 2108) — единица измерения товара, например штуки, граммы.
  mark_quantity?: MarkQuantity; // Дробное количество маркированного товара (тег в 54 ФЗ — 1291).
}

export interface Deal {
  id: string; // Идентификатор сделки в ЮKassa.
  settlements: {
    type: string; // Тип операции.
    amount: Amount;
  };
}

export interface MarkQuantity {
  numerator: number; // Числитель — количество продаваемых товаров из одной потребительской упаковки (тег в 54 ФЗ — 1293).
  denominator: number; // Знаменатель — общее количество товаров в потребительской упаковке (тег в 54 ФЗ — 1294).
}

export interface CancellationDetails {
  party: string; // Участник процесса возврата, который принял решение отменить транзакцию.
  reason: string; // Причина отмены возврата.
}

export interface FraudData {
  topped_up_phone?: string; // Номер телефона для пополнения. Не более 15 символов.
  merchant_customer_bank_account: {
    account_number: string; // Номер банковского счета. Формат — 20 символов.
    bic: string; // Банковский идентификационный код (БИК) банка, в котором открыт счет.
  }; // Данные банковского счета, открытого в вашей системе.
}

export interface Transfers {
  account_id: string; // Идентификатор магазина, в который будет произведен перевод.
  amount: Amount; // Сумма перевода.
}

export interface ReceiptIndustryDetails {
  federal_id: string; // Идентификатор федерального органа исполнительной власти (тег в 54 ФЗ — 1262).
  document_date: string; // Дата документа основания (тег в 54 ФЗ — 1263). Передается в формате ISO 8601
  document_number: string; // Номер нормативного акта федерального органа исполнительной власти, регламентирующего порядок заполнения реквизита «значение отраслевого реквизита» (тег в 54 ФЗ — 1264).
  value: string; // Значение отраслевого реквизита (тег в 54 ФЗ — 1265).
}

export interface ReceiptOperationalDetails {
  operation_id: number; // Идентификатор операции (тег в 54 ФЗ — 1271). Число от 0 до 255.
  value: string; // Данные операции (тег в 54 ФЗ — 1272).
  created_at: string; // Время создания операции (тег в 54 ФЗ — 1273).
}

export interface Confirmation {
  type: string; // Код сценария подтверждения
  locale: 'ru_RU' | 'en_US' | string; // Язык интерфейса, писем и смс, которые будет видеть или получать пользователь.
  confirmation_token?: string; // Токен для инициализации платежного виджета ЮKassa
  confirmation_url?: string; // Диплинк на мобильное приложение, в котором пользователь подтверждает платеж.
  confirmation_data?: string; // Данные для генерации QR-кода.
  enforce?: boolean; // Запрос на проведение платежа с аутентификацией по 3-D Secure.
  return_url: string; // URL, на который вернется пользователь после подтверждения или отмены платежа на веб-странице. Не более 2048 символов.
}

export interface Metadata {}

export interface PaymentMethod {
  type: string; // Код способа оплаты.
  id: string; // Идентификатор способа оплаты.
  saved: boolean;
  card?: Card; // Данные банковской карты.
  title?: string;
  discount_amount?: Amount; // Сумма скидки для рассрочки.
  login?: string; // Логин пользователя в Альфа-Клике (привязанный телефон или дополнительный логин).
  sbp_operation_id?: string; // Идентификатор операции в СБП (НСПК). Пример: 1027088AE4CB48CB81287833347A8777
  payer_bank_details?: PayerBankDetails; // Банковские реквизиты плательщика (юридического лица или ИП).
  payment_purpose?: string; // Назначение платежа (не больше 210 символов).
  vat_data: VatData; // Данные о налоге на добавленную стоимость (НДС).
}

export interface Customer {
  full_name?: string; // Для юрлица — название организации, для ИП и физического лица — ФИО.
  inn?: string; // ИНН пользователя (10 или 12 цифр).
  email?: string; // Адрес электронной почты пользователя.
  phone?: string; // Номер телефона пользователя.
}

export interface PayerBankDetails {
  full_name: string; // Полное наименование организации.
  short_name: string; // Сокращенное наименование организации.
  address: string; // Адрес организации.
  inn: string; // Индивидуальный налоговый номер (ИНН) организации.
  bank_name: string; // Наименование банка организации.
  bank_branch: string; // Отделение банка организации.
  bank_bik: string; // Банковский идентификационный код (БИК) банка организации.
  account: string; // Номер счета организации.
  kpp?: string; // Код причины постановки на учет (КПП) организации.
}
export interface VatData {
  type: string; // Код способа расчета НДС.
  amount?: Amount; // Сумма НДС.
  rate?: number; // Налоговая ставка (в процентах). Возможные значения: 7, 10, 18 и 20.
}

export interface Card {
  first6: string;
  last4: string;
  expiry_month: string;
  expiry_year: string;
  card_type: string;
  issuer_country: string;
  issuer_name: string;
}

export interface Recipient {
  account_id?: string; // Идентификатор магазина в ЮKassa. (YOOKASSA_STORE_ID)
  gateway_id: string; // Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта.
}

export interface IncomeAmount {
  value: string; // Сумма в выбранной валюте
  currency: string; // Трехбуквенный код валюты в формате ISO-4217
}
