/*
 * MySql query module.
 * Created: 20/04/2022
 * Write by:
 * - Hari Yulianto Pratama
 */

package mysqlQuery

import (
	"database/sql"
	"fmt"
	"reflect"
)

// Select query for returning multiple rows
func Select(databaseHandler *sql.DB, column string, table string,
	condition string, inputParameters ...any) ([]map[string]interface{}, error) {
	// Execute query
	query := "SELECT " + column + " FROM " + table + " " + condition
	rows, error := databaseHandler.Query(query, inputParameters...)
	if error != nil {
		return nil, fmt.Errorf(
			"failed to querying database => mysql query syntax %q => query parameters %q => %q",
			query, inputParameters, error)
	}
	// Then close rows
	defer rows.Close()
	// Get columns
	columns, error := rows.Columns()
	if error != nil {
		return nil, fmt.Errorf("failed to get columns => %q", error)
	}
	// Make map string interface array variable
	list := make([]map[string]interface{}, 0)
	// Iterate query result
	for rows.Next() {
		// Make temporary interface to store MySQL query result value
		values := make([]interface{}, len(columns))
		// Every values returned from MySQL query assign to a string pointer
		// and all the memory adresses store in temporary interface for further process
		for index := range columns {
			var stringPointer string
			values[index] = &stringPointer
		}
		// Scan rows from MySQL query result
		error = rows.Scan(values...)
		if error != nil {
			return nil, fmt.Errorf("failed to scan rows => %q", error)
		}
		// Make map string interface variable to store temporary interface values
		mapStringInterface := make(map[string]interface{})
		// Read every pointer value from temporary interface then store all the data
		// to map string interface variable
		for index, value := range values {
			pointer := reflect.ValueOf(value)
			queryResult := pointer.Interface()
			if pointer.Kind() == reflect.Ptr {
				queryResult = pointer.Elem().Interface()
			}
			mapStringInterface[columns[index]] = queryResult
		}
		// Store all data from map string interface variable
		// to map string interface array variable
		list = append(list, mapStringInterface)
	}
	return list, nil
}

// // Select query for returning single row
// func SelectSingleRow(databaseHandler *sql.DB, column string, table string,
// 	condition string, inputParameters ...any) (map[string]interface{}, error) {
// 	// Execute query
// 	query := "SELECT " + column + " FROM " + table + " " + condition
// 	row := databaseHandler.QueryRow(query, inputParameters...)
// 	// Get columns
// 	columns := strings.Split(column, ",")
// 	// Make temporary interface to store MySQL query result value
// 	values := make([]interface{}, len(columns))
// 	// Every values returned from MySQL query assign to a string pointer
// 	// and all the memory adresses store in temporary interface for further process
// 	for index := range columns {
// 		var stringPointer string
// 		values[index] = &stringPointer
// 	}
// 	// Scan rows from MySQL query result
// 	error := row.Scan(values...)
// 	if error != nil {
// 		return nil, fmt.Errorf(
// 			"failed to scan row => mysql query syntax %q => query parameters %q => %q",
// 			query, inputParameters, error)
// 	}
// 	// Make map string interface variable to store temporary interface values
// 	mapStringInterface := make(map[string]interface{})
// 	// Read every pointer value from temporary interface then store all the data
// 	// to map string interface variable
// 	for index, value := range values {
// 		pointer := reflect.ValueOf(value)
// 		queryResult := pointer.Interface()
// 		if pointer.Kind() == reflect.Ptr {
// 			queryResult = pointer.Elem().Interface()
// 		}
// 		mapStringInterface[columns[index]] = queryResult
// 	}
// 	return mapStringInterface, nil
// }
