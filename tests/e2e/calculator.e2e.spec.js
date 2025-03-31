const { test, expect } = require('@playwright/test');

test('Should perform addition via UI and display result + update history', async ({ page }) => {
  // Aller sur la page
  await page.goto('http://localhost:3000');

  // Remplir la valeur A
  await page.fill('#valueA', '2');
  // Remplir la valeur B
  await page.fill('#valueB', '3');

  // Choisir l’opération (add par défaut) => on peut laisser tel quel
  // Cliquer sur "Calculer"
  await page.click('#calculateBtn');

  // Vérifier le résultat
  await expect(page.locator('#result')).toHaveText('5');

  // Vérifier que l’historique contient le résultat "5"
  await expect(page.locator('#historyList')).toContainText('5');
});
