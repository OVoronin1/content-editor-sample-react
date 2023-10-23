# Content Editor

Решение тестовой задачи.
    
## Постановка задачи

Используя React + Redux создайте компонент, в котором будут два поля для ввода, кнопка и область для отображения контента:

Область «контент» задается объектом content, который может включать в себя несколько типов элементов:
1) panel со свойствами: width, height, visible
2) label со свойствами: caption, visible
3) button со свойствами: caption, width, height, visible

Свойства имеют следующий тип:
* width, height – число
* caption – текст
* visible – true/false

Пример:
    content = [
        {
    		type: 'panel',
    		props: {
    			width: 500,
    			height: 200,
    			visible: true
    		},
    	},
    	{
    		type: 'label',
    		props: {
    			caption: 'test',
    			visible: false
    		},
    	},
    	{
    		type: 'button',
    		props: {
    			width: 100,
    			height: 50
    			visible: true
    		},
    	}
    ]

Элемент 'panel' может включать в себя любые другие элементы в том числе другие 'panel'. Например:
{
	type: 'panel',
	props: {
		width: 500,
		height: 200,
		visible: true
	},
	content: [{
			type: 'label',
			props: {
				caption: 'test',
				visible: false
			}
	}]
}


### Задача:

1. Задать начальный content, который будет включать в себя весь перечень элементов и отобразить его на экране с учетом размеров и видимости (panel - <div> с рамкой, label - <span> c текстом, button - <button> с надписью ).
2. Реализовать следующий механизм:
    1) в поле «Путь» вводим строку, в которой задаем путь внутри объекта, например: 'content[2].props.caption';
    2) в поле «Новое значение» указываем новое значение данного свойства, например: 'test2'; можно внести в том числе и такое значение: {type: 'label', props: {caption: 'test', visible: false}}, соответственно в content добавится вложенный объект;
    3) по клику на кнопке «применить» объект должен измениться и на экране должен отобразиться новое содержимое content; изменение объекта content должно происходить с использованием spread оператора «...», не следует для этой цели испльзовать сторонние пакеты.

## Пояснение к решению

Интерфейс: 
* поле ввода "путь" - доступ через "." и "content[...]";
* поле ввода "значение" - новый массив, объект или значение свойства в формате JSON, допускается использовать одинарные кавычки '' вместо двойных "";
* кнопка "отправить" - по нажатию происходит модификация контента (добавление/изменение элементов);
* поле контента - отображает контент в виде совокупности компонентов Panel, Label, Button, у которых свойство props.visible === true;
* кнопка для показа контента в виде текста - по нажатию показывается/скрывается штора и поле с текстовым содержимым.

## Демонстрация компонента

https://typetrainer.ru/content-editor-sample-react/
--------------------------------------------------------------------------

