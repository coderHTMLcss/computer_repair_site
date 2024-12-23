
INSERT INTO customers (
    first_name, last_name, email, phone, address1, address2, city, state, zip, notes, active, created_at, updated_at
) VALUES
    ('Сергій', 'Сергій', 'sergey.sergey@example.com', '+380991555698', 'Вул. Головна, 123', 'Кв. 4Б', 'Київ', 'КО', '01001', 'Клієнт з 2020 року', true, now(), now()),
    ('Яна', 'Сміт', 'yana.smith@example.com', '+380961555598', 'Вул. Дубова, 456', NULL, 'Львів', 'ЛВ', '79001', 'VIP клієнт', true, now(), now()),
    ('Аліса', 'Аліса', 'alice.alice@example.com', '+380971575698', 'Вул. Соснова, 789', 'Офіс 100', 'Одеса', 'ОД', '65001', NULL, true, now(), now()),
    ('Василь', 'Браун', 'vasyl.brown@example.com', '+380931655691', 'Вул. Кленова, 321', NULL, 'Харків', 'ХА', '61001', 'Преференційний клієнт', true, now(), now()),
    ('Михайло', 'Михайло', 'misha.damishavis@example.com', '+380952555696', 'Вул. Тополя, 654', 'Поверх 2', 'Кривий Ріг', 'ДН', '50001', 'Новий клієнт', true, now(), now());
