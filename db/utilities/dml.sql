-- == categorias ==

INSERT INTO category (name) VALUES
('Terror'),
('Suspenso'),
('Drama'),
('Comedia');


-- == peliculas ==

INSERT INTO movies (name, category_id, release_date, created_at) VALUES
('El Conjuro', 1, '2013-07-19', NOW()),
('It', 1, '2017-09-08', NOW()),
('Scream', 1, '1996-12-20', NOW()),
('La Monja', 1, '2018-09-07', NOW()),
('El Exorcista', 1, '1973-12-26', NOW()),
('Actividad Paranormal', 1, '2007-09-14', NOW()),
('Annabelle', 1, '2014-10-03', NOW()),
('Posesión Infernal', 1, '2013-04-05', NOW()),
('Hereditary', 1, '2018-06-08', NOW()),
('Midsommar', 1, '2019-07-03', NOW()),

('La Ventana Indiscreta', 2, '1954-08-01', NOW()),
('Fragmentado', 2, '2016-09-26', NOW()),
('El Sexto Sentido', 2, '1999-08-06', NOW()),
('Perdida', 2, '2014-10-03', NOW()),
('El Silencio de los Inocentes', 2, '1991-02-14', NOW()),
('Zodiaco', 2, '2007-03-02', NOW()),
('Psicosis', 2, '1960-06-16', NOW()),
('La Isla Siniestra', 2, '2010-02-19', NOW()),
('Seven', 2, '1995-09-22', NOW()),
('Prisioneros', 2, '2013-09-20', NOW()),

('Forrest Gump', 3, '1994-07-06', NOW()),
('El Padrino', 3, '1972-03-24', NOW()),
('En Busca de la Felicidad', 3, '2006-12-15', NOW()),
('Sueño de Fuga', 3, '1994-09-23', NOW()),
('Cadena Perpetua', 3, '1994-09-23', NOW()),
('Milagros Inesperados', 3, '1999-12-10', NOW()),
('La Lista de Schindler', 3, '1993-12-15', NOW()),
('El Pianista', 3, '2002-09-25', NOW()),
('Joker', 3, '2019-10-04', NOW()),
('Los Miserables', 3, '2012-12-25', NOW()),

('La Máscara', 4, '1994-07-29', NOW()),
('Loco por Mary', 4, '1998-07-15', NOW()),
('Una Esposa de Mentira', 4, '2011-02-11', NOW()),
('Ted', 4, '2012-06-29', NOW()),
('Superbad', 4, '2007-08-17', NOW()),
('Mi Pobre Angelito', 4, '1990-11-16', NOW()),
('Los Cazafantasmas', 4, '1984-06-08', NOW()),
('Zoolander', 4, '2001-09-28', NOW()),
('Jumanji: Bienvenidos a la Jungla', 4, '2017-12-20', NOW()),
('Scary Movie', 4, '2000-07-07', NOW()),

('Son Como Niños', 4, '2010-06-25', NOW()),
('Norbit', 4, '2007-02-09', NOW()),
('Click', 4, '2006-06-23', NOW()),
('Mentiroso Mentiroso', 4, '1997-03-21', NOW()),
('Una Noche en el Museo', 4, '2006-12-22', NOW()),
('La Gran Aventura LEGO', 4, '2014-02-07', NOW()),
('Los Fockers', 4, '2004-12-22', NOW()),
('Los Cazafantasmas 2', 4, '1989-06-16', NOW()),
('Mr. Bean en la Habitación 426', 4, '1993-10-30', NOW()),
('Mi Villano Favorito', 4, '2010-07-09', NOW());