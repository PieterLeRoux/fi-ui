import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { AssetModel, AssetType } from './AssetModel';

class Assets extends React.Component {
  assets: AssetModel[] = [];
  currentAsset: any = {
    name: '',
    type: '',
    startValue: 0,
    contribution: 0,
  };

  constructor(props: any) {
    super(props);
    this.state = { value: '' };
    this.assets = [
      {
        name: 'Emergency Fund',
        type: AssetType.Saving,
        startValue: 7006.01,
        contribution: 0.0,
      },
      {
        name: 'Down Payment',
        type: AssetType.Saving,
        startValue: 13066.41,
        contribution: 2000.0,
      },
      {
        name: '401k',
        type: AssetType.Investment,
        startValue: 28000,
        contribution: 531,
      },
      {
        name: 'Roth IRA',
        type: AssetType.Investment,
        startValue: 2600.0,
        contribution: 1100.0,
      },
      {
        name: 'Car Loan',
        type: AssetType.Liabilitiy,
        startValue: 11800.0,
        contribution: 430.0,
      },
    ];
  }

  addAsset = () => {
    this.assets.push(this.currentAsset);
  };

  rows = [
    { name: 'Frozen yoghurt', calories: 59, fat: 6.0, carbs: 24, protein: 4.0 },
  ];
  render() {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    return (
      <Fragment>
        {/* <Container maxWidth='sm'>
          <TextField
            name='name'
            label='Asset Name'
            onChange={this.handleInputChange}
          />
          <TextField
            name='type'
            label='Asset Type'
            onChange={this.handleInputChange}
          />
          <TextField
            name='startValue'
            label='Starting Value'
            onChange={this.handleInputChange}
          />
          <TextField
            name='contribution'
            label='Contribution'
            onChange={this.handleInputChange}
          />
          <Button variant='contained' color='primary' onClick={this.addAsset}>
            Add Asset
          </Button>
        </Container> */}

        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>2020 Fund</TableCell>
                {this.assets.map((asset) => (
                  <TableCell align='right'>{asset.name}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                {this.assets.map((asset) => (
                  <TableCell align='right'>{asset.startValue}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component='th'>{month}</TableCell>
                {this.assets.map((asset) => (
                  <TableCell align='right'>
                    {asset.startValue + asset.contribution}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Fragment>
    );
  }
}

export default Assets;
