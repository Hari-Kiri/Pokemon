/*
 * MySql connector module.
 * Created: 20/04/2022
 * Write by:
 * - Hari Yulianto Pratama
 */

package mysqlConnector

import (
	"database/sql"
	"goal/applicationSettingsLoader"
	"log"

	"github.com/go-sql-driver/mysql"
)

// MySql database connection initializer
func Initialize(allowNativePassword bool) (*sql.DB, error) {
	loadDatabaseConfiguration, error := applicationSettingsLoader.LoadDatabaseConfiguration()
	// If LoadDatabaseConfiguration() return error handle it
	if error != nil {
		return nil, error
	}
	configuration := mysql.Config{
		User:                 loadDatabaseConfiguration.DatabaseConfiguration.User,
		Passwd:               loadDatabaseConfiguration.DatabaseConfiguration.Password,
		Net:                  loadDatabaseConfiguration.DatabaseConfiguration.ConnectionType,
		Addr:                 loadDatabaseConfiguration.DatabaseConfiguration.Hostname,
		DBName:               loadDatabaseConfiguration.DatabaseConfiguration.DatabaseName,
		AllowNativePasswords: allowNativePassword,
	}
	// Connect to database
	connect, error := sql.Open("mysql", configuration.FormatDSN())
	if error != nil {
		return nil, error
	}
	// Logging to console
	var mySqlVersion string
	errorSelectVersion := connect.QueryRow("SELECT VERSION()").Scan(&mySqlVersion)
	if errorSelectVersion != nil {
		return nil, errorSelectVersion
	}
	log.Println("[info] Initializing connection to MySql version " + mySqlVersion)
	// Return mysql connect session
	return connect, nil
}

// Ping to mysql database
func PingDatabase(databaseHandler *sql.DB) (bool, error) {
	// Test database connection
	error := databaseHandler.Ping()
	if error != nil {
		return false, error
	}
	return true, nil
}
