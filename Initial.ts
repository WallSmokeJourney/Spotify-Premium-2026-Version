class TemperatureRecord {
    constructor(
        public readonly city: string,
        public readonly value: number
    ) {}
}

class WeatherStation {
    private records: TemperatureRecord[] = [];

    addRecord(city: string, value: number): void {
        this.records.push(new TemperatureRecord(city, value));
    }

    averageTemperature(): number {
        if (this.records.length === 0) {
            return 0;
        }

        const total = this.records.reduce((sum, record) => sum + record.value, 0);
        return total / this.records.length;
    }

    printReport(): void {
        console.log("Weather Report");
        console.log("==============");

        for (const record of this.records) {
            console.log(`${record.city}: ${record.value.toFixed(1)} C`);
        }

        console.log("==============");
        console.log(`Average: ${this.averageTemperature().toFixed(1)} C`);
    }
}

const station = new WeatherStation();

station.addRecord("Berlin", 23.4);
station.addRecord("Paris", 25.1);
station.addRecord("Madrid", 31.8);
station.addRecord("Rome", 28.6);

station.printReport();
