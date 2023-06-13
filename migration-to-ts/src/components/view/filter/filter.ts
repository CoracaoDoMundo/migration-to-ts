class Filter {
  public readFilterInfo(e: Event, input: HTMLInputElement) {
    const value = input.value;
    this.filterName(value);
  }

  public filterName(value: string) {
    const pattern: string = value.toLowerCase().replace(/ /g, '');

    const itemsList: HTMLDivElement[] = Array.from(document.querySelectorAll('.source__item'));
    let container: HTMLDivElement | null = document.querySelector('.sources');

    container!.style.height = '140px';
    itemsList.forEach((el) => {
      let id: string = el.getAttribute('data-source-id')!;
      id = id.replace(/-/g, '').slice(0, pattern.length);
      if (pattern.length === 0) {
        el.style.display = 'block';
        container!.style.height = 'var(--height)';
        container!.style.justifyContent = 'space-between';
      }
      if (id !== pattern) {
        el.style.display = 'none';
        container!.style.height = 'fit-content';
        container!.style.justifyContent = 'flex-start';
      }
    });
  }
}

export default Filter;
