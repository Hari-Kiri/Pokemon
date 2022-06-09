/*
 * Secure Hash Algorithm digest 256 hash module.
 * Created: 23/04/2022
 * Write by:
 * - Hari Yulianto Pratama
 */

package sha256

import (
	"crypto/sha256"
	"encoding/base64"
)

// Hash string to sha256
func Encode(content string) string {
	hashPasswordToSha256 := sha256.Sum256([]byte(content))
	passwordHashed := base64.StdEncoding.EncodeToString(hashPasswordToSha256[:])
	return passwordHashed
}
