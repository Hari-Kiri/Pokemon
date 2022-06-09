module goal/app

go 1.18

replace goal/applicationSettingsLoader => ./modules/applicationSettingsLoader

replace goal/makeHandler => ./modules/makeHandler

replace goal/renderTemplate => ./modules/renderTemplate

replace goal/mysqlConnector => ./modules/mysql/connector

replace goal/mysqlQuery => ./modules/mysql/library

replace goal/json => ./modules/json

replace goal/hash/sha256 => ./modules/hash/sha256

require (
	goal/applicationSettingsLoader v0.0.0-00010101000000-000000000000
	goal/json v0.0.0-00010101000000-000000000000
	goal/makeHandler v0.0.0-00010101000000-000000000000
	goal/renderTemplate v0.0.0-00010101000000-000000000000
)
