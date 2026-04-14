#!/usr/bin/env bash
set -euo pipefail

DOMAIN="tommyhoang.com"
WWW="www.tommyhoang.com"

echo "Checking HTTP status..."
curl -I "https://${DOMAIN}" | sed -n '1p'
curl -I "https://${WWW}" | sed -n '1p'

echo ""
echo "Checking DNS A records..."
dig +short "${DOMAIN}" A

echo ""
echo "Checking DNS CNAME for www..."
dig +short "${WWW}" CNAME

echo ""
echo "Checking MX records..."
dig +short "${DOMAIN}" MX

echo ""
echo "Manual checks still required:"
echo "- Submit contact form and verify inbox delivery."
echo "- Send test mail to hi@tommyhoang.com and verify Gmail receipt."
