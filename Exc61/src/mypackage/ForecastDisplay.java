package mypackage;

public class ForecastDisplay implements Observer, DisplayElement{

	private float temperature;
	private float humidity;
	private float pressure;
	private Subject weatherData;
	public ForecastDisplay(Subject weatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
	}
	@Override
	public void display() {
		// TODO Auto-generated method stub
		System.out.println("Forecast: More of the same");
	}
	@Override
	public void update(float temperature, float humidity, float pressure) {
		// TODO Auto-generated method stub
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		display();
	}
}
