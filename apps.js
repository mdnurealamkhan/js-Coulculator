        const input = document.querySelector(`#input`);

        function addInput(number) {
            input.value = input.value + number;
        };
        function result() {
            input.value = eval(input.value);
        }

        function del() {
            input.value = ``;
        }
