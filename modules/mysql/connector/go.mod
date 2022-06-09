module goal/mysqlConnector

go 1.18

replace goal/applicationSettingsLoader => ../../applicationSettingsLoader

require (
	github.com/go-sql-driver/mysql v1.6.0
	goal/applicationSettingsLoader v0.0.0-00010101000000-000000000000
)
