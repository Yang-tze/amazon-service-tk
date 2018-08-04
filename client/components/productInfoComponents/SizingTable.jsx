import React from 'react';
import styles from '../../style/productInfoComponents/SizingTable.css';

const CasualShirts = () => {
  return (
    <tbody>
      <tr className={styles.trh}>
        <th className={styles.th}>
          US
        </th>
        <th>
          Chest
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
        <th>
          Waist
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
        <th>
          Sleeve length
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
        <th>
          Neck
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
      </tr>
      <tr className={styles.tableEvenRow}>
        <td className={styles.td}>S</td>
        <td>35 - 37</td>
        <td>29 - 31</td>
        <td>33 1/2 - 34</td>
        <td>14 - 14 1/2</td>
      </tr>
      <tr className={styles.tableOddRow}>
        <td className={styles.td}>M</td>
        <td>38 - 40</td>
        <td>32 - 34</td>
        <td>34 1/2 - 35</td>
        <td>15 - 15 1/2</td>
      </tr>
      <tr className={styles.tableEvenRow}>
        <td className={styles.td}>L</td>
        <td>41 - 43</td>
        <td>35 - 37</td>
        <td>35 1/2 - 36</td>
        <td>16 - 16 1/2</td>
      </tr>
      <tr className={styles.tableOddRow}>
        <td className={styles.td}>XL</td>
        <td>44 - 47</td>
        <td>38 - 41</td>
        <td>36 1/2 - 37</td>
        <td>17 - 17 1/2</td>
      </tr>
    </tbody>
  );
};

const TShirts = () => {
  return (
    <tbody>
      <tr className={styles.trh}>
        <th className={styles.th}>
          US
        </th>
        <th>
          Chest
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
        <th>
          Waist
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
      </tr>
      <tr className={styles.tableEvenRow}>
        <td className={styles.td}>S</td>
        <td>35 - 37</td>
        <td>29 - 31</td>
      </tr>
      <tr className={styles.tableOddRow}>
        <td className={styles.td}>M</td>
        <td>38 - 40</td>
        <td>32 - 34</td>
      </tr>
      <tr className={styles.tableEvenRow}>
        <td className={styles.td}>L</td>
        <td>41 - 43</td>
        <td>35 - 37</td>
      </tr>
      <tr className={styles.tableOddRow}>
        <td className={styles.td}>XL</td>
        <td>44 - 47</td>
        <td>38 - 41</td>
      </tr>
    </tbody>
  );
};

const PoloShirts = () => {
  return (
    <tbody>
      <tr className={styles.trh}>
        <th className={styles.th}>
          US
        </th>
        <th>
          Chest
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
        <th>
          Waist
          <br />
          <span className={styles.units}>(in inches)</span>
        </th>
      </tr>
      <tr className={styles.tableEvenRow}>
        <td className={styles.td}>S</td>
        <td>35 - 37</td>
        <td>29 - 31</td>
      </tr>
      <tr className={styles.tableOddRow}>
        <td className={styles.td}>M</td>
        <td>38 - 40</td>
        <td>32 - 34</td>
      </tr>
      <tr className={styles.tableEvenRow}>
        <td className={styles.td}>L</td>
        <td>41 - 43</td>
        <td>35 - 37</td>
      </tr>
      <tr className={styles.tableOddRow}>
        <td className={styles.td}>XL</td>
        <td>44 - 47</td>
        <td>38 - 41</td>
      </tr>
    </tbody>
  );
};

const SizingTable = (props) => {
  const { visibility, onClick } = props;
  const style = {
    visibility: visibility ? 'visible' : 'hidden',
    opacity: visibility ? '1' : '0',
    transition: visibility ? '0.4s opacity ease-in-out' : 'visibility 0s linear 0.4s, opacity 0.4s ease-in-out',
  };

  return (
    <div className={styles.modal} style={style} onClick={onClick} data-target="sizing-modal">
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.h4}>Size Chart</h4>
          <button className={styles.button} type="button" data-target="sizing-modal">
            <div className={styles.x}>
              &#x2716;
            </div>
          </button>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div>
              <h4 className={styles.bodyTitle}>Men's Size Chart</h4>
            </div>
            <h3>Casual Shirts</h3>
            <table className={styles.table}>
              <CasualShirts />
            </table>
            <h3>T-Shirts</h3>
            <table className={styles.table}>
              <TShirts />
            </table>
            <h3>Polo</h3>
            <table className={styles.table}>
              <PoloShirts />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizingTable;
