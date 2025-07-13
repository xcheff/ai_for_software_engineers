#!/bin/bash
# Script to list all JavaScript files (excluding node_modules) and print the total number of lines.

# Find all .js files, excluding node_modules
js_files=()
while IFS= read -r file; do
  js_files+=("$file")
done < <(find . -type d -name node_modules -prune -o -type f -name "*.js" -print)

# List all JavaScript files
echo "JavaScript files (excluding node_modules):"
for file in "${js_files[@]}"; do
  echo "$file"
done

# Count total lines
if [ ${#js_files[@]} -gt 0 ]; then
  total_lines=$(wc -l "${js_files[@]}" | tail -n 1 | awk '{print $1}')
else
  total_lines=0
fi

echo
echo "Total lines in JavaScript files: $total_lines"
