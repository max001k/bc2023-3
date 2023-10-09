const fs = require('fs');
// Зчитати JSON з файлу
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка при зчитуванні файлу JSON:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);

    // Проаналізувати та форматувати дані
    const results = jsonData.map(item => {
      const stockCode = item.StockCode || '';
      const valCode = item.ValCode || '';
      const attraction = item.Attraction || '';
      // Форматувати та повернути результат
      return `${stockCode}-${valCode}-${attraction}`;
    });
    // Зберегти результати у файл output.txt
    fs.writeFile('output.txt', results.join('\n'), 'utf8', (err) => {
      if (err) {
        console.error('Помилка запису в output.txt:', err);
        return;
      }
      console.log('Аналіз завершено. Результати збережено в output.txt.');
    });
  } catch (parseError) {
    console.error('Помилка при парсингу JSON:', parseError);
  }
});
