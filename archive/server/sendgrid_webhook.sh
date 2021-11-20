localtunnel () {
  lt -s 8ca2lgz6 --port 5000
}
until localtunnel; do
  echo "localtunnel server crashed"
  sleep 2
done