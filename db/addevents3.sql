DELETE FROM events *;

INSERT INTO events (eventname, tag, estart, eend) VALUES 
('Accuracy Opening', 'firm', '2015-09-01 08:00:00', '2018-09-01 10:00:00'),
('Sale', 'marketing','2018-09-03 08:00:00', '2018-09-03 10:00:00'),
('Personal Finance Open House', 'com', '2018-12-02 08:00:00', '2018-12-02 20:00:00'),
('Community Day', 'com', '2018-12-06 09:00:00', '2018-12-02 20:00:00'),
('New Interns First Day', 'com', '2019-05-01 08:00:00', '2018-12-02 20:00:00'),
('Move to New Office', 'firm', '2017-05-02 08:00:00', '2018-12-02 20:00:00'),
('Christmas Party', 'firm', '2018-12-22 19:00:00', '2018-12-02 21:00:00'),
('Field Day', 'firm', '2018-05-02 08:00:00', '2018-12-02 20:00:00');