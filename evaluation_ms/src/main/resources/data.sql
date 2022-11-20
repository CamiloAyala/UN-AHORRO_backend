-- The questions and answers were taken from:
-- https://repository.cesa.edu.co/handle/10726/3989?locale-attribute=en

INSERT INTO questions (questionid, question_level, question_text, question_type) VALUES 
    (1, 0, 'Suponga que tenía $ 100.000 en una cuenta de ahorros y la tasa de interés era del 2% por año. Después de 5 años, ¿cuánto cree que tendría en la cuenta si dejara el dinero para crecer?', 'MULTIPLE_CHOICE'),

    (2, 0, 'Imagine que la tasa de interés en su cuenta de ahorros fue de 1% por año y La inflación fue del 2% anual. Después de 1 año, ¿cuánto podría comprar con el dinero en esta cuenta?', 'MULTIPLE_CHOICE'),

    (3, 0, 'Si usted fuera a tomar una deuda de largo plazo, ¿qué tipo de tasa de interés debería tomar para disminuir su riesgo?', 'MULTIPLE_CHOICE'),

    (4, 0, 'Según su conocimiento, ¿cual de los siguientes productos financieros tiene un mayor costo de endeudamiento?', 'MULTIPLE_CHOICE'),

    (5, 0, 'Si usted fuera un asesor financiero que busca invertir el dinero de un cliente que busca rentabilidad, pero con bajo riesgo, ¿en qué le propondría invertir? ', 'MULTIPLE_CHOICE');

INSERT INTO answers (answerid, answer_text, is_correct, questionid)VALUES
    (1, 'Más de $ 102.000', false, 1),
    (2, 'Exactamente $ 102.000', true, 1),
    (3, 'Menos de $ 102.000', false, 1),
    (4, 'No lo sé', false, 1),

    (5, 'Mas que hoy', false, 2),
    (6, 'Exactamente lo mismo', false, 2),
    (7, 'Menos que hoy', true, 2),
    (8, 'No lo sé', false, 2),

    (9, 'Inflación + 5%', false, 3),
    (10, 'DTF + 5%', false, 3),
    (11, 'Tasa fija del 8%', true, 3),

    (12, 'Tarjeta de crédito', true, 4),
    (13, 'Crédito de vivienda', false, 4),
    (14, 'Crédito de libre inversión', true, 4),

    (15, 'Acciones de Apple', false, 5),
    (16, 'Fondo de Capital Privado', false, 5),
    (17, 'Titulos del estado', true, 5),
    (18, 'Adquirir el 30% de una startup', false, 5);