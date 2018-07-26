import React from 'react';

const CasualShirts = () => {
  return (
    <tbody className="sizing-table">
      <tr>
        <th>
          US
        </th>
        <th>
          Chest
          <span className="units">(in inches)</span>
        </th>
        <th>
          Waist
          <span className="units">(in inches)</span>
        </th>
        <th>
          Sleeve length
          <span className="units">(in inches)</span>
        </th>
        <th>
          Neck
          <span className="units">(in inches)</span>
        </th>
      </tr>
      <tr>
        <td>S</td>
        <td>35 - 37</td>
        <td>29 - 31</td>
        <td>33 1/2 - 34</td>
        <td>14 - 14 1/2</td>
      </tr>
      <tr>
        <td>M</td>
        <td>38 - 40</td>
        <td>32 - 34</td>
        <td>34 1/2 - 35</td>
        <td>15 - 15 1/2</td>
      </tr>
      <tr>
        <td>L</td>
        <td>41 - 43</td>
        <td>35 - 37</td>
        <td>35 1/2 - 36</td>
        <td>16 - 16 1/2</td>
      </tr>
      <tr>
        <td>XL</td>
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
    <tbody className="sizing-table">
      <tr>
        <th>
          US
        </th>
        <th>
          Chest
          <span className="units">(in inches)</span>
        </th>
        <th>
          Waist
          <span className="units">(in inches)</span>
        </th>
      </tr>
      <tr>
        <td>S</td>
        <td>35 - 37</td>
        <td>29 - 31</td>
      </tr>
      <tr>
        <td>M</td>
        <td>38 - 40</td>
        <td>32 - 34</td>
      </tr>
      <tr>
        <td>L</td>
        <td>41 - 43</td>
        <td>35 - 37</td>
      </tr>
      <tr>
        <td>XL</td>
        <td>44 - 47</td>
        <td>38 - 41</td>
      </tr>
    </tbody>
  );
};

const PoloShirts = () => {
  return (
    <tbody className="sizing-table">
      <tr>
        <th>
          US
        </th>
        <th>
          Chest
          <span className="units">(in inches)</span>
        </th>
        <th>
          Waist
          <span className="units">(in inches)</span>
        </th>
      </tr>
      <tr>
        <td>S</td>
        <td>35 - 37</td>
        <td>29 - 31</td>
      </tr>
      <tr>
        <td>M</td>
        <td>38 - 40</td>
        <td>32 - 34</td>
      </tr>
      <tr>
        <td>L</td>
        <td>41 - 43</td>
        <td>35 - 37</td>
      </tr>
      <tr>
        <td>XL</td>
        <td>44 - 47</td>
        <td>38 - 41</td>
      </tr>
    </tbody>
  );
};

const SizingTable = (props) => {
  return (
    <div className="sizing-popup-window">
      <div className="sizing-title-bar">
        <h4>Size Chart</h4>
      </div>
      <h3>Casual Shirts</h3>
      <table>
        <CasualShirts />
      </table>
      <h3>T-Shirts</h3>
      <table>
        <TShirts />
      </table>
      <h3>Polo</h3>
      <table>
        <PoloShirts />
      </table>
    </div>
  );
};

export default SizingTable;
