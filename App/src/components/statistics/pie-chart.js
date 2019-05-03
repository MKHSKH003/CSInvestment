import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartWithCenteredLabels extends React.PureComponent {
    constructor(props) {
    super(props);
    }
    add(a, b) {
            return a + b;
        }
    render() {
        const {students} = this.props;

        const data = [
            {
                key: 1,
                amount: students.filter(function(x){return x.isAdmin!=1}).length,
                svg: { fill: '#1abc9c' },
            },
            {
                key: 2,
                amount: students.filter(function(x){return x.courses.includes('Beginner')}).length,
                svg: { fill: '#3498db' }
            },
            {
                key: 3,
                amount: students.filter(function(x){return x.courses.includes('Intermediate')}).length,
                svg: { fill: '#34495e' }
            },
            {
                key: 4,
                amount: students.filter(function(x){return x.courses.includes('Advance')}).length,
                svg: { fill: 'green' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 450 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartWithCenteredLabels