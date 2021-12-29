const boton = document.querySelector(".btn-table");

const table = document.querySelector("table");

boton.addEventListener("click", () => {
  table.insertAdjacentHTML(
    "afterbegin",
    `<tr>
      <td>New Cell1</td>
      <td>New Cell2</td>
    </tr>`
  );
});
