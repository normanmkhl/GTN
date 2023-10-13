CREATE TABLE if not exists ExporterPerYear AS
SELECT reporterDesc, refYear, sum(fobvalue) as fobvalue
FROM raw_table_export
GROUP BY reporterDesc, refYear;